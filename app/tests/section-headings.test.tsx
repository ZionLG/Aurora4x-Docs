import assert from 'node:assert/strict'
import test from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ContentArea from '../src/components/ContentArea'
import type { DocsManifest, SectionRoute } from '../src/manifest'
import { parseSections } from '../src/utils/extractSections'

function renderSection({
  title = 'Additional Conventional Systems',
  content = `**${title}**\n\nUpdated documentation.`,
  view = 'current',
  version = '2.0.0',
  base = '',
  route,
}: {
  title?: string
  content?: string
  view?: 'current' | 'changelog'
  version?: string
  base?: string
  route?: SectionRoute
} = {}) {
  const topic = { id: 'ships', title: 'Ships', category: 'design', ...(base ? { base: 'base.md' } : {}) }
  const manifest: DocsManifest = {
    categories: [{ id: 'design', label: 'Design' }],
    topics: [topic],
    versions: [
      { version: '3.0.0', label: 'Planned', date: '', file: 'planned.md', unreleased: true },
      { version: '2.0.0', label: 'Update', date: '', file: 'update.md' },
      { version: '1.0.0', label: 'Launch', date: '' },
    ],
    sectionMap: { [title]: route ?? { topic: topic.id } },
    versionTopics: { [version]: [topic.id] },
  }
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: () => null } })
  try {
    return renderToStaticMarkup(
      <ContentArea
        manifest={manifest}
        view={view}
        selection={{ topic, version }}
        changelogCache={{ [version]: parseSections(content) }}
        baseDocsCache={{ [topic.id]: base }}
        cacheReady
        onOpenSidebar={() => {}}
      />,
    )
  } finally {
    if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage)
    else Reflect.deleteProperty(globalThis, 'localStorage')
  }
}

function anchorButtons(html: string): string[] {
  return [...html.matchAll(/<button\b(?=[^>]*title="Copy link to this section")[^>]*>[\s\S]*?<\/button>/g)]
    .map(match => match[0])
}

test('update card titles are keyboard-focusable anchors without linking repeated prose or code', () => {
  const title = 'Additional Conventional Systems'
  const html = renderSection({ content: `**${title}**\n\nThe **${title}** label is repeated.\n\n\`**${title}**\`` })
  const buttons = anchorButtons(html)
  assert.equal(buttons.length, 1)
  assert.match(buttons[0], /type="button"/)
  assert.match(buttons[0], /Additional Conventional Systems/)
  assert.match(buttons[0], /focus-visible:outline/)
  assert.match(html, /<strong>Additional Conventional Systems<\/strong>/)
  assert.match(html, /<code>\*\*Additional Conventional Systems\*\*<\/code>/)
  assert.match(html, /id="s-additional-conventional-systems"/)
})

test('planned and changelog sections use the same title anchor control', () => {
  for (const options of [
    { version: '3.0.0' },
    { view: 'changelog' as const },
  ]) {
    const buttons = anchorButtons(renderSection(options))
    assert.equal(buttons.length, 1)
    assert.match(buttons[0], /Additional Conventional Systems/)
    assert.match(buttons[0], /type="button"/)
  }
})

test('replaced sections anchor both their new title and their previous title without adding headings', () => {
  const html = renderSection({
    title: 'New Rules',
    base: '**Old Rules**\n\nOriginal documentation.',
    route: { topic: 'ships', replaces: 'Old Rules' },
  })
  const buttons = anchorButtons(html)
  assert.equal(buttons.length, 2)
  assert.match(buttons[0], /New Rules/)
  assert.match(buttons[1], /Old Rules/)
  assert.equal((html.match(/>New Rules</g) ?? []).length, 1)
  assert.equal((html.match(/>Old Rules</g) ?? []).length, 1)
})

test('clickable spoiler headings remain scrambled inside inert hidden content', () => {
  const html = renderSection({ title: 'New Spoiler Race' })
  assert.match(html, /class="spoiler-content" aria-hidden="true" inert=""/)
  const buttons = anchorButtons(html)
  assert.equal(buttons.length, 1)
  assert.match(buttons[0], /data-spoiler-char/)
  assert.match(buttons[0], /class="spoiler-glyphs" aria-hidden="true"/)
})
