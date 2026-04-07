import type { MergedSection } from './mergeContent'

export function buildTopicMarkdown(
  topicTitle: string,
  sections: MergedSection[],
  unreleasedVersions?: Set<string>,
): string {
  const parts: string[] = [`# ${topicTitle}`, '']

  const deprecated: MergedSection[] = []

  for (const sec of sections) {
    if (sec.deprecatedBy) {
      deprecated.push(sec)
      continue
    }

    const isUnreleased = unreleasedVersions?.has(sec.version)

    // Version & kind annotation
    const tags: string[] = [`v${sec.version}`]
    if (isUnreleased) tags.push('upcoming')
    else if (sec.kind === 'bugfix') tags.push('bug fix')
    else if (sec.isPatch) tags.push('update')

    if (sec.previousVersions && sec.previousVersions.length > 0) {
      tags.push(`replaces ${sec.previousVersions.map(p => 'v' + p.version).join(', ')}`)
    }

    parts.push(`<!-- ${tags.join(' | ')} -->`)
    parts.push(sec.content)
    parts.push('')
  }

  // Deprecated sections at the bottom
  if (deprecated.length > 0) {
    parts.push('---')
    parts.push('')
    parts.push('## Deprecated')
    parts.push('')
    for (const sec of deprecated) {
      parts.push(`<!-- v${sec.version} | deprecated in v${sec.deprecatedBy} -->`)
      parts.push(sec.content)
      parts.push('')
    }
  }

  return parts.join('\n').trim() + '\n'
}
