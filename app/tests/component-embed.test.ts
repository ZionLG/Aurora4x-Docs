import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { buildSharePages, type SharePage } from '../scripts/share-preview'
import { parseSections } from '../src/utils/extractSections'

const ORIGIN = 'https://preview.example'
const TOPIC = { id: 'colonies', title: 'Colonies' }

interface Component {
  type: number
  accent_color?: number
  content?: string
  url?: string
  style?: number
  components?: Component[]
  accessory?: Component
  items?: Array<{ media: { url: string } }>
}

function readEmbed(page: SharePage) {
  const head = page.html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1]
  assert.ok(head, 'The generated page must contain a server-rendered head')
  const scripts = [...head.matchAll(/<script\b(?=[^>]*\bid="discord:component-embed")(?=[^>]*\btype="application\/json")[^>]*>([\s\S]*?)<\/script>/gi)]
  assert.equal(scripts.length, 1, 'Exactly one component payload must be discoverable in the head')
  const raw = scripts[0][1]
  assert.ok(Buffer.byteLength(raw, 'utf8') <= 3000, 'The emitted JSON, including escaping, must fit Discord\'s 3,000-byte limit')
  const payload = JSON.parse(raw) as { component: Component }
  assert.deepEqual(Object.keys(payload), ['component'])
  assert.equal(payload.component.type, 17)
  assert.equal(payload.component.accent_color, 0x4fc3f7)

  const components: Component[] = []
  function visit(component: Component) {
    components.push(component)
    component.components?.forEach(visit)
    if (component.accessory) visit(component.accessory)
  }
  visit(payload.component)
  assert.ok(components.length <= 40, 'Discord allows at most 40 components')
  assert.equal(components.filter(component => component.type === 17).length, 1)
  return {
    raw,
    payload,
    text: components.filter(component => component.type === 10).map(component => component.content ?? '').join('\n\n'),
    buttons: components.filter(component => component.type === 2),
    images: components.filter(component => component.type === 12).flatMap(component => component.items?.map(item => item.media.url) ?? []),
  }
}

function sectionPage(sections: Array<{ title: string; content: string }>, slug: string) {
  const pages = buildSharePages('current', TOPIC, sections, undefined, false, ORIGIN)
  const page = pages.find(item => item.path === `/share/current/colonies/${slug}.html`)
  assert.ok(page, `Missing generated page for ${slug}`)
  return page
}

test('the real Delete Empty Colonies section fits in full, with condition line breaks and one heading', () => {
  const source = readFileSync(new URL('../public/docs/v1.0.0/06-colonies.md', import.meta.url), 'utf8')
  const section = parseSections(source).find(item => item.title === 'Delete Empty Colonies')
  assert.ok(section)
  const { text } = readEmbed(sectionPage([section], 'delete-empty-colonies'))
  const bodyLines = section.content.split(/\r?\n/).slice(1).map(line => line.trim()).filter(Boolean)
  for (const line of bodyLines) {
    assert.ok(text.includes(line), `Full section text is missing: ${line}`)
  }
  assert.equal(text.split(section.title).length - 1, 1, 'The source heading must not repeat the embed heading')
  const conditions = bodyLines.filter(line => line.startsWith('There ') || line.startsWith('The colony is not exempt'))
  assert.equal(conditions.length, 10)
  const renderedLines = text.split('\n').map(line => line.replace(/^\s*[-*]\s+/, '').trim())
  for (const condition of conditions) {
    assert.ok(renderedLines.includes(condition), `A condition lost its own line: ${condition}`)
  }
  assert.ok(text.includes('A second button ‘Empty Exempt’ toggles a flag'))
  assert.ok(text.includes('even though it currently meets the conditions for deletion.'))
})

test('long, Unicode, and HTML-looking text keep a valid byte-bounded payload', () => {
  const fixtures = [
    'A long paragraph that must be bounded without losing the link. '.repeat(500),
    '星系 🪐 🚀 café — עולם “quoted” \\ path\n'.repeat(500),
    '</script><script>hostile-marker()</script> '.repeat(500),
    'A < B; C < D; "quoted"; \\ escaped. '.repeat(500),
  ]
  for (const content of fixtures) {
    const page = sectionPage([{ title: 'Long Section', content }], 'long-section')
    const embed = readEmbed(page)
    assert.ok(embed.text.length > 0)
    assert.ok(!embed.raw.includes('</script>'))
    assert.equal((page.html.match(/<\/script\s*>/gi) ?? []).length, 2, 'Source text must not close the payload script')
    assert.ok(!Array.from(embed.text).some(character => character.length === 1 && /[\uD800-\uDFFF]/u.test(character)), 'Truncation must not split a Unicode surrogate pair')
    assert.ok(embed.buttons.some(button => button.style === 5 && button.url === `${ORIGIN}/#current/colonies/long-section`))
  }
})

test('component links preserve current, historical, and duplicate section destinations', () => {
  const sections = [
    { title: 'Engines', content: 'First engine section.' },
    { title: 'Engines', content: 'Second engine section.' },
  ]
  for (const view of ['current', 'changelog'] as const) {
    const version = view === 'changelog' ? '1.0.0' : undefined
    const pages = buildSharePages(view, { id: 'ships', title: 'Ships' }, sections, version, false, ORIGIN)
    const base = view === 'current' ? 'current/ships' : 'changelog/ships/1.0.0'
    for (const [index, suffix] of ['', '/engines', '/engines-2'].entries()) {
      const embed = readEmbed(pages[index])
      assert.ok(embed.buttons.some(button => button.style === 5 && button.url === `${ORIGIN}/#${base}${suffix}`))
      if (index === 2) {
        assert.ok(embed.text.includes('Second engine section.'))
        assert.ok(!embed.text.includes('First engine section.'))
      }
    }
  }
})

test('protected sections never expose their body or images in component payloads', () => {
  const pages = buildSharePages('current', { id: 'alien-races', title: 'Alien Races' }, [
    { title: 'Rakhas', content: '**Rakhas**\n\nprotected-formula-9381\n\n![protected-alt-9381](https://images.example/protected-9381.png)' },
    { title: 'Species Attributes', content: 'Public species attributes.' },
  ], undefined, false, ORIGIN)
  for (const page of [pages[0], pages[1]]) {
    const embed = readEmbed(page)
    for (const secret of ['protected-formula-9381', 'protected-alt-9381', 'protected-9381.png']) {
      assert.ok(!JSON.stringify(embed.payload).includes(secret), `Spoiler leaked: ${secret}`)
    }
    assert.deepEqual(embed.images, [])
  }
})

test('explicit spoiler text and images are removed before component extraction', () => {
  const content = [
    '**Survey**',
    'Public survey instructions.',
    '||hidden-inline-4827 ![hidden-alt](https://images.example/hidden-inline-4827.png)||',
    '[spoiler]',
    'hidden-block-4827',
    '![hidden-block](https://images.example/hidden-block-4827.png)',
    '[/spoiler]',
    'Visible final paragraph.',
    '![public map](https://images.example/public-map.png)',
  ].join('\n\n')
  const embed = readEmbed(sectionPage([{ title: 'Survey', content }], 'survey'))
  assert.ok(embed.text.includes('Public survey instructions.'))
  assert.ok(embed.text.includes('Visible final paragraph.'))
  assert.ok(!JSON.stringify(embed.payload).includes('4827'))
  assert.ok(embed.images.includes('https://images.example/public-map.png'))
})

test('a section gallery only uses safe images belonging to that section', () => {
  const page = sectionPage([
    { title: 'First Section', content: '**First Section**\n\n![neighbor](https://images.example/neighbor.png)' },
    { title: 'Survey', content: [
      '**Survey**',
      'A map for this survey.',
      '![HTTPS map](https://images.example/survey.png)',
      '![HTTP map](http://images.example/survey-old.png)',
      '![unsafe](javascript:alert)',
      '![inline data](data:image/png;base64,AAAA)',
      '![local](file:///C:/private.png)',
    ].join('\n\n') },
  ], 'survey')
  const { images } = readEmbed(page)
  assert.ok(images.includes('https://images.example/survey.png'))
  assert.ok(!images.includes('https://images.example/neighbor.png'))
  const allowed = new Set(['https://images.example/survey.png', 'http://images.example/survey-old.png'])
  for (const image of images) {
    assert.ok(allowed.has(image), `An unrelated or unsafe image entered the gallery: ${image}`)
    assert.ok(['https:', 'http:'].includes(new URL(image).protocol))
  }
})

test('richer previews keep Open Graph metadata and the exact browser redirect', () => {
  const page = sectionPage([{ title: 'Survey', content: '**Survey**\n\nPublic instructions.' }], 'survey')
  readEmbed(page)
  assert.match(page.html, /<meta\s+property="og:title"\s+content="[^"]+"/)
  assert.match(page.html, /<meta\s+property="og:description"\s+content="[^"]+"/)
  assert.ok(page.html.includes('window.location.replace("/#current/colonies/survey")'))
  assert.ok(page.html.includes('href="/#current/colonies/survey"'))
  assert.ok(page.html.includes('<noscript>'))
})
