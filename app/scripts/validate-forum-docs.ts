import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { manifest } from '../src/manifest'
import { parseSections } from '../src/utils/extractSections'
import { mergeTopicContent } from '../src/utils/mergeContent'

assert.ok(!manifest.versions.some(entry => entry.version === '2.8.0'), 'Do not merge the renamed release twice')
const docsDirectory = new URL('../public/docs/', import.meta.url)

for (const release of ['3.0.0', '3.1.0']) {
  const version = manifest.versions.find(entry => entry.version === release)!
  assert.ok(version?.file, `v${release} must have a changelog file`)

  const markdown = readFileSync(new URL(version.file, docsDirectory), 'utf8')
  const provenance = JSON.parse(readFileSync(new URL(`v${release}/source.json`, docsDirectory), 'utf8'))
  assert.equal(provenance.version, release)
  assert.equal(provenance.unreleased, false, `v${release} has been released`)
  assert.equal(Boolean(version.unreleased), provenance.unreleased)
  assert.equal(version.date, provenance.releasedOn)
  const sections = parseSections(markdown)
  assert.equal(sections.length, provenance.sectionCount)
  assert.equal(new Set(sections.map(section => section.title)).size, sections.length, 'Section titles must be unique')
  assert.equal(createHash('sha256').update(markdown).digest('hex'), provenance.markdownSha256)
  assert.equal(provenance.posts.length, provenance.postCount)
  assert.equal(new Set(provenance.posts.map((post: { id: number }) => post.id)).size, provenance.postCount)
  assert.equal([...markdown.matchAll(/\[Source: Aurora forum, post \d+\]/g)].length, sections.length)
  assert.doesNotMatch(markdown, /^image\d+×\d+\s+[\d.]+ [KMG]B$/m, 'Discourse metadata must be removed')
  assert.doesNotMatch(markdown, /\[!\[image\]/, 'Discourse lightboxes must use full-size images')
  if (release === '3.0.0') {
    assert.match(markdown, /\| Comm Roll \| CM Addition \|/, 'Communication tables must retain their structure')
    assert.match(markdown, /### Toggle Interrupt Button/, 'Subheadings must stay inside the parent section')
  }

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
  console.log(`Verified v${release}: ${provenance.postCount} source posts, ${sections.length} sections, and ${mappedTopics.size} topic routes.`)
}
