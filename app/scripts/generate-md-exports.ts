/**
 * Post-build script: generates static .md files for each topic.
 * Output: dist/current/{topic-id}.md
 *
 * These are served as real URLs, e.g.:
 *   https://aurora4x-docs.vercel.app/current/aether-rifts.md
 */

import fs from 'fs'
import path from 'path'
import { manifest } from '../src/manifest'
import { parseSections, type MarkdownSection } from '../src/utils/extractSections'
import { mergeTopicContent } from '../src/utils/mergeContent'
import { buildTopicMarkdown } from '../src/utils/exportMarkdown'

const DIST = path.resolve(import.meta.dirname, '..', 'dist')
const DOCS = path.resolve(import.meta.dirname, '..', 'public', 'docs')
const OUT = path.join(DIST, 'current')

function readFile(relPath: string): string {
  const full = path.join(DOCS, relPath)
  if (!fs.existsSync(full)) return ''
  return fs.readFileSync(full, 'utf-8')
}

// Load all changelog files
const changelogCache: Record<string, MarkdownSection[]> = {}
for (const v of manifest.versions) {
  if (!v.file) continue
  const raw = readFile(v.file)
  changelogCache[v.version] = raw ? parseSections(raw) : []
}

// Prepare version sections (oldest first)
const versionSections = manifest.versions
  .filter(v => v.file && changelogCache[v.version])
  .map(v => ({ version: v.version, sections: changelogCache[v.version] }))
  .reverse()

// Unreleased versions
const unreleasedVersions = new Set(
  manifest.versions.filter(v => v.unreleased).map(v => v.version)
)

// Generate .md for each topic
fs.mkdirSync(OUT, { recursive: true })

let count = 0
for (const topic of manifest.topics) {
  const baseSections = topic.base
    ? parseSections(readFile(topic.base))
    : []

  const merged = mergeTopicContent(
    topic.id,
    baseSections,
    '1.0.0',
    versionSections,
    manifest.sectionMap,
    topic.deprecated,
  )

  if (merged.length === 0) continue

  const md = buildTopicMarkdown(topic.title, merged, unreleasedVersions)
  const outFile = path.join(OUT, `${topic.id}.md`)
  fs.writeFileSync(outFile, md, 'utf-8')
  count++
}

console.log(`Generated ${count} .md exports in dist/current/`)
