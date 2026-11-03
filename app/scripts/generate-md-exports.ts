/**
 * Post-build script: generates topic Markdown and shareable HTML metadata pages.
 * Output: Markdown exports, reader pages with metadata, and legacy share redirects.
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
import { buildSharePages, renderReaderPage, type SharePage } from './share-preview'
import { shareSiteOrigin } from './discord-embed'

const DIST = path.resolve(import.meta.dirname, '..', 'dist')
const DOCS = path.resolve(import.meta.dirname, '..', 'public', 'docs')
const OUT = path.join(DIST, 'current')
const SITE_ORIGIN = shareSiteOrigin(process.env)
const appHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

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
let shareCount = 0
function writeSharePages(pages: SharePage[]) {
  for (const page of pages) {
    const outFile = path.join(DIST, page.path.slice(1))
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    fs.writeFileSync(outFile, page.html, 'utf-8')
    const readerFile = path.join(DIST, page.routePath.slice(1), 'index.html')
    fs.mkdirSync(path.dirname(readerFile), { recursive: true })
    fs.writeFileSync(readerFile, renderReaderPage(appHtml, page.preview), 'utf-8')
    shareCount++
  }
}

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

  writeSharePages(buildSharePages('current', topic, merged.map(section => ({
    ...section,
    unreleased: unreleasedVersions.has(section.version),
  })), undefined, false, SITE_ORIGIN))

  for (const version of manifest.versions) {
    const sections = version.version === '1.0.0'
      ? baseSections
      : (changelogCache[version.version] || []).filter(section => {
        const entry = manifest.sectionMap[section.title]
        const routes = Array.isArray(entry) ? entry : entry ? [entry] : []
        return routes.some(route => route.topic === topic.id)
      })
    writeSharePages(buildSharePages('changelog', topic, sections, version.version, version.unreleased, SITE_ORIGIN))
  }
}

console.log(`Generated ${count} .md exports in dist/current/`)
console.log(`Generated ${shareCount} share preview pages in dist/share/`)
console.log(`Generated ${shareCount} reader pages with previews in dist/current/ and dist/changelog/`)
