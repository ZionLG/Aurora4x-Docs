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
  if (slug === 'background-colour-and-map-fonts') return 'map-fonts-in-config-file'
  return slug
}

/** Canonical browser URLs are real paths so crawlers receive the selected section. */
export function docsPath(view: ShareView, topicId?: string, version?: string, sectionSlug?: string): string {
  if (!topicId) return `/${view}`
  return sharePath(view, topicId, version, sectionSlug).replace(/^\/share/, '').replace(/\.html$/, '')
}

/** Read both new page URLs and bookmarks from the old hash-based reader. */
export function docsPathFromLocation(location: { pathname: string; hash: string }): string {
  const legacyHash = /^#(?:current|changelog|admin)(?:\/|$)/.test(location.hash)
  const route = legacyHash ? location.hash.slice(1) : location.pathname.replace(/^\/(?:share\/)?/, '').replace(/\.html$/, '').replace(/\/$/, '')
  if (route === 'admin') return '/admin'
  const [view, topic, versionOrSection, section, ...extra] = normalizeDocsHash(route).split('/')
  if (view !== 'current' && view !== 'changelog') return '/current'
  if (!topic) return docsPath(view)
  if (extra.length || !/^[a-z0-9-]+$/.test(topic)) return docsPath(view)
  if (view === 'changelog') {
    if (!versionOrSection || !/^\d+\.\d+\.\d+$/.test(versionOrSection) || (section && !/^[a-z0-9-]+$/.test(section))) return docsPath(view)
    return docsPath(view, topic, versionOrSection, section)
  }
  if (section || (versionOrSection && !/^[a-z0-9-]+$/.test(versionOrSection))) return docsPath(view)
  return docsPath(view, topic, undefined, versionOrSection)
}

export function normalizeBrowserLocation(browser: Pick<Window, 'location' | 'history'>): void {
  const canonical = docsPathFromLocation(browser.location)
  // Leave the landing page at /; normalize legacy, aliased and trailing-slash routes.
  if (browser.location.pathname === '/' && !browser.location.hash) return
  if (browser.location.pathname !== canonical || browser.location.hash) {
    browser.history.replaceState(null, '', canonical + browser.location.search)
  }
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
