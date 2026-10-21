import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { manifest as docsManifest, type DocsManifest } from '../src/manifest'
import { buildSearchIndex } from '../src/utils/searchIndex'
import { parseSections } from '../src/utils/extractSections'
import { buildSharePages } from '../scripts/share-preview'

const manifest: DocsManifest = {
  categories: [],
  versions: [{ version: '3.0.0', label: 'Upcoming', date: '', file: 'new.md' }, { version: '1.0.0', label: 'Launch', date: '' }],
  topics: [{ id: 'weapons', title: 'Weapons', category: 'combat', base: 'base.md' }],
  sectionMap: { 'Plasma Carronade Update': { topic: 'weapons', replaces: 'Plasma Carronades' } },
  versionTopics: { '3.0.0': ['weapons'] },
}
const baseDocs = { weapons: '**Plasma Carronades**\n\nOld mechanics.\n\n**Ground Survey**\n\nSurvey points.' }
const changelogs = { '3.0.0': [{ title: 'Plasma Carronade Update', content: '**Plasma Carronade Update**\n\nNew mechanics.' }] }

test('current search indexes replacement anchors and current prose instead of obsolete base content', () => {
  const index = buildSearchIndex(manifest, 'current', changelogs, baseDocs)
  assert.deepEqual(index.map(entry => entry.title), ['Plasma Carronade Update', 'Ground Survey'])
  assert.equal(index[0].version, '3.0.0')
  assert.equal(index[0].slug, 'plasma-carronade-update')
  assert.doesNotMatch(index[0].content, /Old mechanics/)
})

test('historical search retains original section anchors and their release versions', () => {
  const index = buildSearchIndex(manifest, 'changelog', changelogs, baseDocs)
  assert.deepEqual(index.map(entry => [entry.title, entry.version]), [
    ['Plasma Carronade Update', '3.0.0'], ['Plasma Carronades', '1.0.0'], ['Ground Survey', '1.0.0'],
  ])
  assert.deepEqual(index.map(entry => entry.slug), ['plasma-carronade-update', 'plasma-carronades', 'ground-survey'])
})

test('search keeps duplicate base sections distinct in current and historical views', () => {
  const duplicateDocs = { weapons: '**Engines**\n\nFirst engine.\n\n**Engines**\n\nSecond engine.\n\n**Engines 2**\n\nLiteral suffix.' }
  for (const view of ['current', 'changelog'] as const) {
    const index = buildSearchIndex(manifest, view, {}, duplicateDocs)
    assert.deepEqual(index.map(entry => entry.slug), ['engines', 'engines-3', 'engines-2'])
    assert.match(index[1].content, /Second engine/)
  }
})

test('actual repeated documentation headings retain content and distinct matching share targets', () => {
  const fixture = {
    ...docsManifest,
    topics: docsManifest.topics.filter(topic => ['ship-components', 'user-interface'].includes(topic.id)),
  }
  const readDoc = (file: string) => readFileSync(new URL(`../public/docs/${file}`, import.meta.url), 'utf8')
  const actualBaseDocs = Object.fromEntries(fixture.topics.map(topic => [topic.id, readDoc(topic.base!)]))
  const actualChangelogs = Object.fromEntries(docsManifest.versions.filter(version => version.file)
    .map(version => [version.version, parseSections(readDoc(version.file!))]))
  const current = buildSearchIndex(fixture, 'current', actualChangelogs, actualBaseDocs)

  for (const [topicId, title, slug] of [
    ['ship-components', 'Maintenance Storage Bays', 'maintenance-storage-bays'],
    ['ship-components', 'C&C Disassembly Fix', 'c-c-disassembly-fix'],
    ['user-interface', 'Race Comparison Window', 'race-comparison-window'],
  ]) {
    const sections = current.filter(entry => entry.topic.id === topicId)
    const repeated = sections.filter(entry => entry.title === title)
    assert.equal(repeated.length, 2, title)
    assert.deepEqual(repeated.map(entry => entry.slug), [slug, `${slug}-2`], title)
    assert.equal(new Set(sections.map(entry => entry.slug)).size, sections.length, topicId)

    const pages = buildSharePages('current', repeated[0].topic, sections)
    for (const entry of repeated) {
      const page = pages.find(page => page.path.endsWith(`/${entry.slug}.html`))
      assert.ok(page, entry.slug)
      assert.ok(page.html.includes(`/#current/${topicId}/${entry.slug}`))
    }
  }
  const maintenance = current.filter(entry => entry.title === 'Maintenance Storage Bays')
  assert.notEqual(maintenance[0].content, maintenance[1].content)
  const disassembly = current.filter(entry => entry.title === 'C&C Disassembly Fix')
  assert.deepEqual(disassembly.map(entry => entry.version), ['1.12.0', '1.13.0'])

  const historical = buildSearchIndex(fixture, 'changelog', actualChangelogs, actualBaseDocs)
  const historicDisassembly = historical.filter(entry => entry.title === 'C&C Disassembly Fix')
  assert.deepEqual(historicDisassembly.map(entry => entry.slug), ['c-c-disassembly-fix', 'c-c-disassembly-fix'])
  assert.deepEqual(historicDisassembly.map(entry => entry.version), ['1.13.0', '1.12.0'])
})
