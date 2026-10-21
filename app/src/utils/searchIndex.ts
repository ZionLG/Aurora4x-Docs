import type { DocsManifest, Topic } from '../manifest'
import { parseSections, type MarkdownSection } from './extractSections'
import { mergeTopicContent } from './mergeContent'
import { sectionAnchors } from './shareLinks'

export interface SearchEntry {
  title: string
  content: string
  topic: Topic
  version: string
  slug: string
}

/** Search the same section titles and content that the selected view renders. */
export function buildSearchIndex(
  manifest: DocsManifest,
  view: 'current' | 'changelog',
  changelogs: Record<string, MarkdownSection[]>,
  baseDocs: Record<string, string>,
): SearchEntry[] {
  const index: SearchEntry[] = []
  const versionSections = manifest.versions
    .filter(version => version.file && changelogs[version.version])
    .map(version => ({ version: version.version, sections: changelogs[version.version] }))
    .reverse()

  for (const topic of manifest.topics) {
    const baseSections = topic.base ? parseSections(baseDocs[topic.id] ?? '') : []
    if (view === 'current') {
      const merged = mergeTopicContent(topic.id, baseSections, '1.0.0', versionSections, manifest.sectionMap, topic.deprecated)
      const anchors = sectionAnchors(merged)
      index.push(...merged.map((section, sectionIndex) => ({
        ...section, title: section.title || topic.title, topic, slug: anchors[sectionIndex],
      })))
      continue
    }

    for (const version of manifest.versions) {
      const sections = version.version === '1.0.0' ? baseSections
        : (changelogs[version.version] ?? []).filter(section => {
          const entry = manifest.sectionMap[section.title]
          return entry && (Array.isArray(entry) ? entry : [entry]).some(route => route.topic === topic.id)
        })
      const anchors = sectionAnchors(sections)
      index.push(...sections.map((section, sectionIndex) => ({
        ...section, title: section.title || topic.title, topic, version: version.version, slug: anchors[sectionIndex],
      })))
    }
  }
  return index
}
