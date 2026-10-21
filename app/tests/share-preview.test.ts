import assert from 'node:assert/strict'
import test from 'node:test'
import { buildSharePages, previewDescription, renderSharePreview } from '../scripts/share-preview'
import { normalizeDocsHash, sectionAnchors, sharePath, shareUrlFromHash, slugify } from '../src/utils/shareLinks'

test('share links retain current sections and historical changelog versions', () => {
  assert.equal(slugify('Ground Survey: Potential & Limits'), 'ground-survey-potential-limits')
  assert.equal(sharePath('current', 'ground-forces'), '/share/current/ground-forces.html')
  assert.equal(
    shareUrlFromHash('#current/ground-forces/ground-survey', 'https://preview.example'),
    'https://preview.example/share/current/ground-forces/ground-survey.html',
  )
  assert.equal(
    shareUrlFromHash('#changelog/ground-forces/2.2.0/ground-survey', 'https://preview.example'),
    'https://preview.example/share/changelog/ground-forces/2.2.0/ground-survey.html',
  )
  assert.equal(
    shareUrlFromHash('#changelog/ground-forces/2.8.0/ground-survey', 'https://preview.example'),
    'https://preview.example/share/changelog/ground-forces/3.0.0/ground-survey.html',
  )
  assert.equal(shareUrlFromHash('#current', 'https://preview.example'), 'https://preview.example/')
  assert.equal(shareUrlFromHash('#admin', 'https://preview.example'), 'https://preview.example/')
  assert.equal(shareUrlFromHash('#changelog/topic', 'https://preview.example'), 'https://preview.example/')
  assert.throws(() => sharePath('changelog', 'ground-forces'), /requires a version/)
})

test('previews escape source text in HTML attributes and script destinations', () => {
  const html = renderSharePreview({
    title: 'A "quote" & <script>title()</script>',
    description: "It's <unsafe> & should stay text",
    destination: '/#current/test/</script><script>alert(1)</script>',
  })
  assert.ok(html.includes('content="A &quot;quote&quot; &amp; &lt;script&gt;title()&lt;/script&gt;"'))
  assert.ok(html.includes('content="It&#39;s &lt;unsafe&gt; &amp; should stay text"'))
  assert.equal((html.match(/<script>/g) || []).length, 1)
  assert.equal((html.match(/<\/script>/g) || []).length, 1)
  assert.ok(html.includes('\\u003c/script>'))
  assert.ok(html.includes('<noscript>'))
  assert.ok(html.includes('property="og:title"'))
  assert.ok(html.includes('name="twitter:description"'))
})

test('old 2.8 version and renamed section bookmarks normalize without changing other routes', () => {
  assert.equal(
    normalizeDocsHash('#changelog/user-interface/2.8.0/v2-8-0-bug-fixes'),
    '#changelog/user-interface/3.0.0/v3-0-0-bug-fixes',
  )
  assert.equal(
    normalizeDocsHash('#current/user-interface/v2-8-0-minor-changes'),
    '#current/user-interface/v3-0-0-minor-changes',
  )
  assert.equal(
    normalizeDocsHash('#current/user-interface/v2-8-0-bug-fixes'),
    '#current/user-interface/v3-0-0-bug-fixes',
  )
  assert.equal(
    shareUrlFromHash('#changelog/user-interface/2.8.0/v2-8-0-minor-changes', 'https://preview.example'),
    'https://preview.example/share/changelog/user-interface/3.0.0/v3-0-0-minor-changes.html',
  )
  assert.equal(
    sharePath('current', 'user-interface', undefined, 'v2-8-0-bug-fixes'),
    '/share/current/user-interface/v3-0-0-bug-fixes.html',
  )
  for (const hash of ['', '#admin', '#current', '#current/ships/engines', '#changelog/ships/2.7.0/engines', '#other/topic/2.8.0/v2-8-0-bug-fixes']) {
    assert.equal(normalizeDocsHash(hash), hash)
  }
})

test('unreleased changelog previews label the release status in their metadata', () => {
  const pages = buildSharePages('changelog', { id: 'ships', title: 'Ships' }, [
    { title: 'Engines', content: 'A planned engine change.' },
  ], '3.0.0', true)
  for (const page of pages) {
    assert.ok(page.html.includes('(v3.0.0 — unreleased)'))
  }
})

test('descriptions remove Markdown decoration and explicit spoilers before truncating', () => {
  const description = previewDescription('**Survey** [manual](https://example.com) ![hidden](image.png) ||secret formula|| [spoiler]hidden discovery[/spoiler] `range`')
  assert.ok(description.includes('Survey manual'))
  assert.ok(description.includes('[Spoiler]'))
  assert.ok(description.includes('range'))
  for (const hidden of ['secret formula', 'hidden discovery', 'image.png', 'https://', '**']) {
    assert.ok(!description.includes(hidden), hidden)
  }
  assert.ok(Buffer.byteLength(previewDescription('word '.repeat(100))) <= 350)
  assert.ok(previewDescription('C# Aurora').includes('C#'))
})

test('topic and section pages redirect to their matching app routes', () => {
  const pages = buildSharePages('changelog', { id: 'ground-forces', title: 'Ground Forces' }, [
    { title: 'Ground Survey', content: '**Ground Survey**\nSearch for minerals.' },
  ], '2.2.0')
  assert.deepEqual(pages.map(page => page.path), [
    '/share/changelog/ground-forces/2.2.0.html',
    '/share/changelog/ground-forces/2.2.0/ground-survey.html',
  ])
  assert.ok(pages[1].html.includes('Ground Survey — Ground Forces (v2.2.0)'))
  assert.ok(pages[1].html.includes('window.location.replace("/#changelog/ground-forces/2.2.0/ground-survey")'))
  assert.ok(pages[1].html.includes('Search for minerals.'))
})

test('topic descriptions exclude sensitive sections and sensitive pages use generic previews', () => {
  const pages = buildSharePages('current', { id: 'alien-races', title: 'Alien Races' }, [
    { title: 'Rakhas', content: 'The secret spawning formula.' },
    { title: 'Species Attributes', content: 'Choose your species attributes.' },
  ])
  assert.ok(pages[0].html.includes('Choose your species attributes.'))
  assert.ok(!pages[0].html.includes('secret spawning formula'))
  assert.ok(!pages[0].html.includes('Rakhas'))
  const spoiler = pages.find(page => page.path.endsWith('/rakhas.html'))!
  assert.ok(spoiler.html.includes('content="Spoiler section"'))
  assert.ok(!spoiler.html.includes('secret spawning formula'))
  assert.ok(!spoiler.html.includes('Rakhas'))
  assert.ok(spoiler.html.includes('/#current/alien-races/rakhas'))
})

test('explicit spoiler labels do not leak in metadata titles', () => {
  const pages = buildSharePages('current', { id: 'test', title: 'Ships' }, [
    { title: 'Discovery ||classified name||', content: 'Public text ||classified content||' },
  ])
  const metadata = pages[1].html.split('</head>')[0]
  assert.ok(!metadata.includes('classified name'))
  assert.ok(!metadata.includes('classified content'))
})

test('duplicate and untitled sections receive distinct share pages with matching contents', () => {
  const pages = buildSharePages('current', { id: 'ships', title: 'Ships' }, [
    { title: '', content: 'Introduction' },
    { title: 'Engines', content: 'First engine section' },
    { title: 'Engines', content: 'Second engine section' },
  ])
  assert.deepEqual(pages.map(page => page.path), [
    '/share/current/ships.html',
    '/share/current/ships/section.html',
    '/share/current/ships/engines.html',
    '/share/current/ships/engines-2.html',
  ])
  assert.ok(pages[2].html.includes('First engine section'))
  assert.ok(!pages[2].html.includes('Second engine section'))
  assert.ok(pages[3].html.includes('Second engine section'))
  assert.ok(!pages[3].html.includes('First engine section'))
  assert.ok(pages[3].html.includes('window.location.replace("/#current/ships/engines-2")'))
  assert.deepEqual(buildSharePages('current', { id: 'empty', title: 'Empty' }, []), [])
})

test('section anchors preserve literal suffixes and uniquely address all duplicate titles', () => {
  const sections = ['Engines', 'Engines', 'Engines 2', 'Engines', 'Engines 2', 'Engines 2 2']
    .map(title => ({ title }))
  assert.deepEqual(sectionAnchors(sections), [
    'engines', 'engines-3', 'engines-2', 'engines-4', 'engines-2-3', 'engines-2-2',
  ])
  assert.deepEqual(sectionAnchors([{ title: '' }, { title: 'Section' }, { title: '!!!' }, { title: 'Section 2' }]), [
    'section-3', 'section', 'section-4', 'section-2',
  ])
})

test('historical duplicate share links retain their version and second occurrence target', () => {
  const pages = buildSharePages('changelog', { id: 'ships', title: 'Ships' }, [
    { title: 'Engines', content: 'First engine section' },
    { title: 'Engines', content: 'Second engine section' },
  ], '1.0.0')
  assert.equal(pages[2].path, '/share/changelog/ships/1.0.0/engines-2.html')
  assert.ok(pages[2].html.includes('/#changelog/ships/1.0.0/engines-2'))
  assert.ok(pages[2].html.includes('Second engine section'))
})
