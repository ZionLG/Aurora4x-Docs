import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { buildSharePages, renderReaderPage } from '../scripts/share-preview'
import { docsPathFromLocation, normalizeBrowserLocation } from '../src/utils/shareLinks'

test('normal reader paths and old bookmarks resolve to the same section', () => {
  const routes = [
    '/current/colonies/population-capacity',
    '/current/ground-forces',
    '/changelog/ground-forces/3.1.0/ground-unit-projects',
    '/changelog/ground-forces/1.0.0',
    '/current', '/changelog', '/admin',
  ]
  for (const route of routes) {
    assert.equal(docsPathFromLocation({ pathname: route, hash: '' }), route)
    assert.equal(docsPathFromLocation({ pathname: route + '/', hash: '' }), route)
    assert.equal(docsPathFromLocation({ pathname: '/', hash: '#' + route.slice(1) }), route)
  }
  assert.equal(docsPathFromLocation({ pathname: '/share/current/colonies/population-capacity.html', hash: '' }), '/current/colonies/population-capacity')
  assert.equal(docsPathFromLocation({ pathname: '/', hash: '#current/user-interface/background-colour-and-map-fonts' }), '/current/user-interface/map-fonts-in-config-file')
  for (const path of ['/current/topic/section/extra', '/current/%3Cscript%3E', '/missing']) {
    assert.equal(docsPathFromLocation({ pathname: path, hash: '' }), '/current')
  }
  assert.equal(docsPathFromLocation({ pathname: '/changelog/topic/not-a-version/section', hash: '' }), '/changelog')
})

test('bookmark migration replaces history once and retains the query string', () => {
  const location = new URL('https://example.com/?v=4#changelog/user-interface/2.8.0/v2-8-0-bug-fixes')
  const calls: string[] = []
  const browser = {
    location,
    history: { replaceState(_data: unknown, _unused: string, url: string) {
      calls.push(url)
      location.href = new URL(url, location).href
    } },
  } as unknown as Pick<Window, 'location' | 'history'>
  normalizeBrowserLocation(browser)
  normalizeBrowserLocation(browser)
  assert.deepEqual(calls, ['/changelog/user-interface/3.0.0/v3-0-0-bug-fixes?v=4'])
})

test('the normal reader response contains section metadata, its rich embed, and the app', () => {
  const template = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
  const pages = buildSharePages('changelog', { id: 'ships', title: 'Ships' }, [
    { title: 'Engines', content: 'First section.' },
    { title: 'Engines', content: 'Second section with $& and $` and $\' literal text.' },
  ], '3.1.0', false, 'https://preview.example')
  const page = pages[2]
  const html = renderReaderPage(template, page.preview)
  assert.equal(page.routePath, '/changelog/ships/3.1.0/engines-2')
  assert.match(html, /<div id="root"><\/div>/)
  assert.match(html, /type="module" src="\/src\/main.tsx"/)
  assert.match(html, /href="https:\/\/fonts.googleapis.com/)
  assert.equal((html.match(/<title>/g) || []).length, 1)
  assert.equal((html.match(/property="og:title"/g) || []).length, 1)
  assert.equal((html.match(/name="description"/g) || []).length, 1)
  assert.ok(html.includes('Second section'))
  assert.ok(!html.includes('First section'))
  assert.ok(!html.includes('window.location.replace'))
  assert.ok(!html.includes('unreleased'))
  assert.ok(html.includes(`rel="canonical" href="https://preview.example${page.routePath}"`))
  const payload = html.match(/<script id="discord:component-embed" type="application\/json">([\s\S]*?)<\/script>/)![1]
  assert.ok(Buffer.byteLength(payload) <= 3000)
  const embed = JSON.parse(payload)
  assert.equal(embed.component.components.at(-1).components[0].url, `https://preview.example${page.routePath}`)
  assert.ok(embed.component.components.some((component: { content?: string }) => component.content === 'Second section with $& and $` and $\' literal text.'))
})
