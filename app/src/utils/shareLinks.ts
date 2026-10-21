export type ShareView = 'current' | 'changelog'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Keep existing first-title anchors, and give repeated headings their own target. */
export function sectionAnchors(sections: { title: string }[]): string[] {
  const naturalSlugs = sections.map(section => slugify(section.title))
  // Reserve literal suffixes too: a second "Engines" must not take "Engines 2".
  const reserved = new Set(naturalSlugs.filter(Boolean))
  const used = new Set<string>()
  return naturalSlugs.map(naturalSlug => {
    if (naturalSlug && !used.has(naturalSlug)) {
      used.add(naturalSlug)
      return naturalSlug
    }
    const base = naturalSlug || 'section'
    let suffix = naturalSlug ? 2 : 1
    let candidate = suffix === 1 ? base : `${base}-${suffix}`
    while (reserved.has(candidate) || used.has(candidate)) {
      candidate = `${base}-${++suffix}`
    }
    used.add(candidate)
    return candidate
  })
}

function normalizeSectionSlug(slug: string): string {
  if (slug === 'v2-8-0-bug-fixes') return 'v3-0-0-bug-fixes'
  if (slug === 'v2-8-0-minor-changes') return 'v3-0-0-minor-changes'
  return slug
}

/** Preserve old bookmarks after the unreleased 2.8 documentation became 3.0. */
export function normalizeDocsHash(hash: string): string {
  const prefix = hash.startsWith('#') ? '#' : ''
  const parts = hash.slice(prefix.length).split('/')
  if (!parts[1]) return hash
  if (parts[0] === 'changelog') {
    if (parts[2] === '2.8.0') parts[2] = '3.0.0'
    if (parts[3]) parts[3] = normalizeSectionSlug(parts[3])
  } else if (parts[0] === 'current') {
    if (parts[2]) parts[2] = normalizeSectionSlug(parts[2])
  }
  return prefix + parts.join('/')
}

/** A real HTTP path lets chat clients read metadata without executing the app. */
export function sharePath(
  view: ShareView,
  topicId: string,
  version?: string,
  sectionSlug?: string,
): string {
  const parts = [view, topicId]
  if (view === 'changelog') {
    if (!version) throw new Error('A changelog share link requires a version')
    parts.push(version === '2.8.0' ? '3.0.0' : version)
  }
  if (sectionSlug) parts.push(normalizeSectionSlug(sectionSlug))
  return `/share/${parts.map(encodeURIComponent).join('/')}.html`
}

/** Convert an existing app route, preserving historical versions and section anchors. */
export function shareUrlFromHash(hash: string, origin: string): string {
  const [view, topicId, third, fourth] = normalizeDocsHash(hash).replace(/^#/, '').split('/')
  if ((view !== 'current' && view !== 'changelog') || !topicId) {
    return new URL('/', origin).href
  }
  if (view === 'changelog' && !third) return new URL('/', origin).href
  const path = view === 'changelog'
    ? sharePath(view, topicId, third, fourth)
    : sharePath(view, topicId, undefined, third)
  return new URL(path, origin).href
}
