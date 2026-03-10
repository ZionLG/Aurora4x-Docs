import type { SectionRoute } from '../manifest'
import type { MarkdownSection } from './extractSections'

export type { SectionRoute }

export interface MergedSection {
  title: string
  content: string
  version: string
  /** Previous versions of this section (collapsed in UI) */
  previousVersions?: Array<{
    version: string
    content: string
  }>
  /** Section was deprecated by this version with no replacement */
  deprecatedBy?: string
  /** This is a patch/update not present in the base document */
  isPatch?: boolean
  /** Unmapped patch — goes into the "Additional Notes" section at the end */
  isMisc?: boolean
  /** 'update' (default) or 'bugfix' — bugfixes are collapsed by default */
  kind?: 'update' | 'bugfix'
}

/**
 * Resolves a sectionMap entry for a given section title and topic ID.
 * Returns the matching SectionRoute if found, or undefined.
 */
function lookupRoutes(
  sectionMap: Record<string, SectionRoute | SectionRoute[]>,
  title: string,
  topicId: string,
): SectionRoute | undefined {
  const entry = sectionMap[title]
  if (!entry) return undefined
  if (Array.isArray(entry)) {
    return entry.find(r => r.topic === topicId)
  }
  return entry.topic === topicId ? entry : undefined
}

/**
 * Auto-detect section kind from its title.
 * Titles containing "Fix" are treated as bugfixes; everything else is an update.
 */
function detectKind(title: string): 'update' | 'bugfix' {
  return /fix/i.test(title) ? 'bugfix' : 'update'
}

/**
 * Merges a topic's base document with all changelog sections routed to it.
 *
 * - baseSections come from the topic's v1.0.0 (or other base) document.
 * - versionSections are changelog files parsed into sections, ordered oldest-first.
 * - sectionMap is the flat routing map from the manifest that directs changelog
 *   sections to topics with optional positioning (after/replaces).
 * - deprecated marks base sections that have been superseded.
 *
 * For topics with a base document, changelog sections either:
 *   1. Replace a base section (via `replaces` or exact title match)
 *   2. Insert after a base section (via `after`)
 *   3. Appear as misc patches at the end
 *
 * For topics WITHOUT a base document, all matched sections are collected in order.
 */
export function mergeTopicContent(
  topicId: string,
  baseSections: MarkdownSection[],
  baseVersion: string,
  versionSections: Array<{ version: string; sections: MarkdownSection[] }>,
  sectionMap: Record<string, SectionRoute | SectionRoute[]>,
  deprecated?: Record<string, string>,
): MergedSection[] {
  const hasBase = baseSections.length > 0

  // --- Topics with NO base: collect all matched sections in order ---
  if (!hasBase) {
    const result: MergedSection[] = []

    for (const { version, sections } of versionSections) {
      for (const section of sections) {
        const route = lookupRoutes(sectionMap, section.title, topicId)
        if (!route) continue

        const kind = route.kind ?? detectKind(section.title)

        // Check if we already have a section with the same title (for replacement)
        const existingIdx = result.findIndex(
          m => m.title.toLowerCase() === section.title.toLowerCase(),
        )

        if (existingIdx !== -1) {
          const old = result[existingIdx]
          result[existingIdx] = {
            title: section.title,
            content: section.content,
            version,
            isPatch: true,
            kind,
            previousVersions: [
              ...(old.previousVersions || []),
              { version: old.version, content: old.content },
            ],
          }
        } else {
          result.push({
            title: section.title,
            content: section.content,
            version,
            isPatch: true,
            kind,
          })
        }
      }
    }

    return result
  }

  // --- Topics WITH a base document ---

  // Build deprecated lookup (case-insensitive)
  const depLower = deprecated
    ? new Map(Object.entries(deprecated).map(([k, v]) => [k.toLowerCase(), v]))
    : new Map<string, string>()

  // Start with base sections, marking deprecated ones
  const merged: MergedSection[] = baseSections.map(s => ({
    title: s.title,
    content: s.content,
    version: baseVersion,
    deprecatedBy: depLower.get(s.title.toLowerCase()),
  }))

  const miscPatches: MergedSection[] = []

  // Apply changelog sections oldest-first so newer versions override older ones
  for (const { version, sections } of versionSections) {
    for (const section of sections) {
      // 1. Look up explicit route in sectionMap
      const route = lookupRoutes(sectionMap, section.title, topicId)

      // 2. If no explicit route, try auto-match by title
      const autoMatchIdx = !route
        ? merged.findIndex(
            m => m.title.toLowerCase() === section.title.toLowerCase(),
          )
        : -1

      // If no route and no auto-match, this section is not for this topic — skip
      if (!route && autoMatchIdx === -1) continue

      const kind = route?.kind ?? detectKind(section.title)

      // --- Route with `replaces`: find target and replace it ---
      if (route?.replaces) {
        const targetIdx = merged.findIndex(
          m => m.title.toLowerCase() === route.replaces!.toLowerCase(),
        )
        if (targetIdx !== -1) {
          const old = merged[targetIdx]
          merged[targetIdx] = {
            title: section.title,
            content: section.content,
            version,
            kind,
            previousVersions: [
              ...(old.previousVersions || []),
              { version: old.version, content: old.content },
            ],
          }
          continue
        }
      }

      // --- Exact title match in merged: replace it ---
      const titleMatchIdx =
        autoMatchIdx !== -1
          ? autoMatchIdx
          : merged.findIndex(
              m => m.title.toLowerCase() === section.title.toLowerCase(),
            )

      if (titleMatchIdx !== -1) {
        const old = merged[titleMatchIdx]
        merged[titleMatchIdx] = {
          title: section.title,
          content: section.content,
          version,
          kind,
          previousVersions: [
            ...(old.previousVersions || []),
            { version: old.version, content: old.content },
          ],
        }
        continue
      }

      // --- Route with `after`: insert after that section ---
      if (route?.after) {
        // Find the LAST occurrence of the after target, then skip past
        // consecutive isPatch entries to maintain insertion order.
        let afterIdx = -1
        for (let j = merged.length - 1; j >= 0; j--) {
          if (merged[j].title.toLowerCase() === route.after.toLowerCase()) {
            let insertPos = j + 1
            while (insertPos < merged.length && merged[insertPos].isPatch) {
              insertPos++
            }
            afterIdx = insertPos
            break
          }
        }
        if (afterIdx !== -1) {
          merged.splice(afterIdx, 0, {
            title: section.title,
            content: section.content,
            version,
            isPatch: true,
            kind,
          })
          continue
        }
      }

      // --- Route exists but no after/replaces and no title match: misc patch ---
      miscPatches.push({
        title: section.title,
        content: section.content,
        version,
        isPatch: true,
        isMisc: true,
        kind,
      })
    }
  }

  return [...merged, ...miscPatches]
}
