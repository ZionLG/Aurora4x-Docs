import type { HistoryEntry } from '../manifest'
import type { MarkdownSection } from './extractSections'

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
 * Merges all loaded history entries for a topic into a single unified document.
 *
 * - Entries are ordered newest-first (matching manifest convention).
 * - The oldest entry is the "base" document.
 * - Newer entries either:
 *   1. Replace a base section (via `replaces` mapping or exact title match)
 *   2. Insert after a base section (via `insertAfter` mapping)
 *   3. Appear as highlighted patches at the top (no mapping)
 *
 * Deprecated base sections (no replacement) stay collapsed.
 */
export function mergeTopicContent(
  entries: Array<{
    entry: HistoryEntry
    sections: MarkdownSection[]
  }>,
): MergedSection[] {
  if (entries.length === 0) return []

  if (entries.length === 1) {
    return entries[0].sections.map(s => ({
      title: s.title,
      content: s.content,
      version: entries[0].entry.version,
      deprecatedBy: s.deprecatedBy,
    }))
  }

  // Base = oldest (last), patches = everything else newest-first
  const base = entries[entries.length - 1]
  const patches = entries.slice(0, -1)

  // Build merged array from base sections
  const merged: MergedSection[] = base.sections.map(s => ({
    title: s.title,
    content: s.content,
    version: base.entry.version,
    deprecatedBy: s.deprecatedBy,
  }))

  const miscPatches: MergedSection[] = []

  // Apply patches oldest-first so newer versions override older ones
  for (const patch of [...patches].reverse()) {
    for (const section of patch.sections) {
      // 1. Check explicit `replaces` mapping
      const replacesTitle = patch.entry.replaces?.[section.title]
      let targetIdx = -1

      if (replacesTitle) {
        targetIdx = merged.findIndex(
          m => m.title.toLowerCase() === replacesTitle.toLowerCase(),
        )
      }

      // 2. Check exact title match
      if (targetIdx === -1) {
        targetIdx = merged.findIndex(
          m => m.title.toLowerCase() === section.title.toLowerCase(),
        )
      }

      if (targetIdx !== -1) {
        // Replace: current content becomes history, new content takes over
        const old = merged[targetIdx]
        merged[targetIdx] = {
          title: section.title,
          content: section.content,
          version: patch.entry.version,
          kind: patch.entry.kind,
          previousVersions: [
            ...(old.previousVersions || []),
            { version: old.version, content: old.content },
          ],
        }
        continue
      }

      // 3. Check `insertAfter` mapping
      const insertAfterTitle = patch.entry.insertAfter?.[section.title]
      if (insertAfterTitle) {
        // Find the LAST occurrence of insertAfter target or any previously inserted
        // section that also targeted the same base section (to maintain order)
        let afterIdx = -1
        for (let j = merged.length - 1; j >= 0; j--) {
          if (merged[j].title.toLowerCase() === insertAfterTitle.toLowerCase()) {
            // Find the last consecutive inserted patch after this base section
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
            version: patch.entry.version,
            isPatch: true,
            kind: patch.entry.kind,
          })
          continue
        }
      }

      // 4. No match — miscellaneous patch, grouped at end
      miscPatches.push({
        title: section.title,
        content: section.content,
        version: patch.entry.version,
        isPatch: true,
        isMisc: true,
        kind: patch.entry.kind,
      })
    }
  }

  return [...merged, ...miscPatches]
}
