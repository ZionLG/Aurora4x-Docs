import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { manifest } from '../src/manifest'
import { parseSections } from '../src/utils/extractSections'
import { mergeTopicContent } from '../src/utils/mergeContent'

const version = manifest.versions.find(entry => entry.version === '3.0.0')!
assert.ok(version?.file, 'v3.0.0 must have a changelog file')
assert.equal(version.unreleased, true, 'The source still labels v3.0.0 unreleased')
assert.ok(!manifest.versions.some(entry => entry.version === '2.8.0'), 'Do not merge the renamed release twice')

const docsDirectory = new URL('../public/docs/', import.meta.url)
const markdown = readFileSync(new URL(version.file, docsDirectory), 'utf8')
const provenance = JSON.parse(readFileSync(new URL('v3.0.0/source.json', docsDirectory), 'utf8'))
const sections = parseSections(markdown)
assert.equal(sections.length, provenance.sectionCount)
assert.equal(new Set(sections.map(section => section.title)).size, sections.length, 'Section titles must be unique')
assert.equal(createHash('sha256').update(markdown).digest('hex'), provenance.markdownSha256)
assert.equal(provenance.posts.length, provenance.postCount)
assert.equal(new Set(provenance.posts.map((post: { id: number }) => post.id)).size, provenance.postCount)
assert.equal([...markdown.matchAll(/\[Source: Aurora forum, post \d+\]/g)].length, sections.length)
assert.doesNotMatch(markdown, /^image\d+×\d+\s+[\d.]+ [KMG]B$/m, 'Discourse metadata must be removed')
assert.doesNotMatch(markdown, /\[!\[image\]/, 'Discourse lightboxes must use full-size images')
assert.match(markdown, /\| Comm Roll \| CM Addition \|/, 'Communication tables must retain their structure')
assert.match(markdown, /### Toggle Interrupt Button/, 'Subheadings must stay inside the parent section')

const mappedTopics = new Set<string>()
for (const section of sections) {
  const route = manifest.sectionMap[section.title]
  assert.ok(route, `Unmapped section: ${section.title}`)
  for (const destination of Array.isArray(route) ? route : [route]) {
    assert.ok(manifest.topics.some(topic => topic.id === destination.topic), `Unknown topic: ${destination.topic}`)
    assert.ok(manifest.versionTopics[version.version].includes(destination.topic), `Missing version topic: ${destination.topic}`)
    mappedTopics.add(destination.topic)
    const merged = mergeTopicContent(destination.topic, [], '1.0.0', [{ version: version.version, sections }], manifest.sectionMap)
    assert.ok(merged.some(item => item.title === section.title), `Section lost during merge: ${section.title}`)
  }
}
assert.deepEqual([...mappedTopics].sort(), [...manifest.versionTopics[version.version]].sort())
console.log(`Verified ${provenance.postCount} source posts, ${sections.length} sections, and ${mappedTopics.size} topic routes.`)
