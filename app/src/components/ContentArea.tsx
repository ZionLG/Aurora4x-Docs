import { useEffect, useState, useRef, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import { type DocsManifest, type Topic } from '../manifest'
import type { ViewMode, ActiveSelection } from '../App'
import { parseSections, type MarkdownSection } from '../utils/extractSections'
import { mergeTopicContent, type MergedSection } from '../utils/mergeContent'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Get the section slug from the current URL hash (3rd segment) */
function getSectionFromHash(): string | null {
  const hash = window.location.hash.replace(/^#/, '')
  const parts = hash.split('/')
  return parts[2] && parts[0] === 'current' ? parts[2] : parts[3] || null
}

interface Props {
  manifest: DocsManifest
  view: ViewMode
  selection: ActiveSelection | null
  changelogCache: Record<string, MarkdownSection[]>
  cacheReady: boolean
  onSelectEntry: (topic: Topic, version?: string) => void
}

export default function ContentArea({ manifest, view, selection, changelogCache, cacheReady }: Props) {
  const [mergedSections, setMergedSections] = useState<MergedSection[] | null>(null)
  const [changelogSections, setChangelogSections] = useState<MarkdownSection[]>([])
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLElement>(null)

  // Load and merge content
  useEffect(() => {
    if (!selection) return
    if (view === 'current' && !cacheReady) return // wait for changelog cache
    const { topic, version } = selection
    let cancelled = false
    setLoading(true)

    if (view === 'current') {
      // Load base file (if any), then combine with cached changelogs
      const loadBase = topic.base
        ? fetch('/docs/' + topic.base)
            .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text() })
            .then(raw => parseSections(raw))
            .catch(() => [] as MarkdownSection[])
        : Promise.resolve([] as MarkdownSection[])

      loadBase.then(baseSections => {
        if (cancelled) return

        // Filter cached changelog sections for this topic
        const versionSections = manifest.versions
          .filter(v => v.file && changelogCache[v.version])
          .map(v => ({
            version: v.version,
            sections: changelogCache[v.version],
          }))
          .reverse() // oldest first for merge algorithm

        const merged = mergeTopicContent(
          topic.id,
          baseSections,
          '1.0.0',
          versionSections,
          manifest.sectionMap,
          topic.deprecated,
        )

        // Mark sections from unreleased versions as 'planned'
        const unreleasedVersions = new Set(
          manifest.versions.filter(v => v.unreleased).map(v => v.version)
        )
        for (const s of merged) {
          if (unreleasedVersions.has(s.version)) s.kind = 'planned'
        }

        setMergedSections(merged)
        setChangelogSections([])
        setLoading(false)
      })
    } else {
      // Changelog view - show single version's sections for this topic
      if (version === '1.0.0' && topic.base) {
        fetch('/docs/' + topic.base)
          .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text() })
          .then(raw => {
            if (cancelled) return
            setChangelogSections(parseSections(raw))
            setMergedSections(null)
            setLoading(false)
          })
          .catch(() => {
            if (cancelled) return
            setChangelogSections([])
            setMergedSections(null)
            setLoading(false)
          })
      } else {
        // Filter cached sections by topic
        const allSections = changelogCache[version] || []
        const filtered = allSections.filter(s => {
          const entry = manifest.sectionMap[s.title]
          if (!entry) return false
          if (Array.isArray(entry)) return entry.some(r => r.topic === topic.id)
          return entry.topic === topic.id
        })
        setChangelogSections(filtered)
        setMergedSections(null)
        setLoading(false)
      }
    }

    return () => { cancelled = true }
  }, [selection, view, changelogCache, cacheReady])

  // Scroll to section anchor after content loads, or to top
  useEffect(() => {
    if (loading || !scrollRef.current) return
    const sectionSlug = getSectionFromHash()
    if (sectionSlug) {
      // Small delay to let DOM render
      requestAnimationFrame(() => {
        const el = scrollRef.current?.querySelector(`#s-${sectionSlug}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        scrollRef.current?.scrollTo(0, 0)
      })
    } else {
      scrollRef.current.scrollTo(0, 0)
    }
  }, [loading, mergedSections, changelogSections])

  const handleSectionClick = useCallback((title: string) => {
    const slug = slugify(title)
    const hash = window.location.hash.replace(/^#/, '')
    const parts = hash.split('/')
    // Build new hash: view/topicId/sectionSlug
    const base = parts.slice(0, 2).join('/')
    const newHash = `#${base}/${slug}`
    window.history.replaceState(null, '', newHash)
  }, [])

  if (!selection) {
    return <Welcome manifest={manifest} view={view} />
  }

  const { topic } = selection
  const cat = manifest.categories.find(c => c.id === topic.category)
  const contributingVersions = manifest.versions
    .filter(v => {
      if (v.version === '1.0.0') return !!topic.base
      return manifest.versionTopics[v.version]?.includes(topic.id)
    })
    .map(v => v.version)

  return (
    <main ref={scrollRef} className="flex-1 overflow-y-auto scroll-smooth">
      <div className="max-w-[860px] mx-auto px-12 pt-12 pb-30 animate-[fade-up_0.35s_ease_both]">
        {/* Topic header */}
        <div className="mb-10 pb-6 border-b border-border">
          {cat && (
            <span className="font-mono text-[0.7rem] text-text-dim tracking-[0.1em] uppercase block mb-3">
              {cat.label}
            </span>
          )}
          <h1 className="font-display text-[1.9rem] font-bold tracking-[0.03em] text-text leading-tight">
            {topic.title}
          </h1>

          {view === 'current' && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.08em]">
                {contributingVersions.length > 1 ? 'Sources:' : 'Source:'}
              </span>
              {contributingVersions.map(v => (
                <span
                  key={v}
                  className="font-mono text-[0.65rem] px-2.5 py-1 rounded border
                    text-text-muted bg-bg-raised border-border"
                >
                  v{v}
                </span>
              ))}
            </div>
          )}
        </div>

        {loading && <p className="text-text-muted">Loading...</p>}

        {/* CURRENT VIEW: Merged content */}
        {!loading && view === 'current' && mergedSections && (() => {
          const hasMisc = mergedSections.some(s => s.isMisc)
          const firstMiscIdx = mergedSections.findIndex(s => s.isMisc)
          return (
            <div className="article-body text-[0.95rem] leading-[1.75] text-text">
              {mergedSections.map((sec, i) => (
                <div key={`${sec.title}-${i}`}>
                  {hasMisc && i === firstMiscIdx && (
                    <div className="flex items-center gap-3 mt-12 mb-4">
                      <div className="flex-1 h-px bg-border" />
                      <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.1em]">
                        Additional Notes
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                  )}
                  <MergedSectionBlock section={sec} manifest={manifest} onSectionClick={handleSectionClick} />
                </div>
              ))}
            </div>
          )
        })()}

        {/* CHANGELOG VIEW: Single version's sections for this topic */}
        {!loading && view === 'changelog' && changelogSections.length > 0 && (
          <div className="article-body text-[0.95rem] leading-[1.75] text-text">
            {changelogSections.map((sec, si) => (
              <ReactMarkdown key={si}>{sec.content}</ReactMarkdown>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

/* ── Merged Section Renderer ─────────────────────────────────── */

function MergedSectionBlock({
  section,
  manifest,
  onSectionClick,
}: {
  section: MergedSection
  manifest: DocsManifest
  onSectionClick: (title: string) => void
}) {
  const ver = manifest.versions.find(v => v.version === section.version)
  const slug = slugify(section.title)
  const anchorId = `s-${slug}`

  // ── Deprecated section (no replacement, collapsed by default) ──
  if (section.deprecatedBy) {
    return (
      <details id={anchorId} className="my-6 group scroll-mt-6">
        <summary className="flex items-center gap-3 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
          <span className="text-[0.7rem] text-text-muted transition-transform group-open:rotate-90">&#9654;</span>
          <SectionAnchor title={section.title} slug={slug} onClick={onSectionClick} dim />
          <VersionBadge version={section.version} date={ver?.date} dim />
          <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded border border-warning/25 bg-warning/[0.08] text-warning/80">
            Replaced in v{section.deprecatedBy}
          </span>
          <div className="flex-1 h-px bg-border" />
        </summary>
        <div className="collapsed-content mt-3 pl-5 border-l-2 border-border opacity-50">
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </div>
      </details>
    )
  }

  // ── Patch section (update, bugfix, or planned — inserted into base doc) ──
  if (section.isPatch) {
    const isBugfix = section.kind === 'bugfix'
    const isPlanned = section.kind === 'planned'

    if (isBugfix) {
      return (
        <details id={anchorId} className="my-3 group scroll-mt-6">
          <summary className="patch-card flex items-center gap-2.5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden
            px-4 py-1.5 rounded-lg border border-warning/20 bg-warning/[0.04]">
            <span className="text-[0.6rem] text-text-muted transition-transform group-open:rotate-90">&#9654;</span>
            <VersionBadge version={section.version} date={ver?.date} dim />
            <span className="font-mono text-[0.6rem] font-semibold tracking-[0.08em] uppercase text-warning/70">
              Bug Fix
            </span>
            <SectionAnchor title={section.title} slug={slug} onClick={onSectionClick} inline />
          </summary>
          <div className="patch-card mt-1 px-4 py-2 ml-2 border-l-2 border-warning/20">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        </details>
      )
    }

    // Planned: expanded, violet styling
    if (isPlanned) {
      return (
        <div id={anchorId} className="patch-card my-4 rounded-lg border border-violet-500/30 bg-violet-500/[0.06] overflow-hidden scroll-mt-6">
          <div className="flex items-center gap-2.5 px-4 py-1.5 border-b border-violet-500/20 bg-violet-500/[0.08]">
            <VersionBadge version={section.version} date={ver?.date} dim />
            <span className="font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-violet-400">
              Planned
            </span>
          </div>
          <div className="px-4 py-2">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        </div>
      )
    }

    // Updates: expanded, accent styling
    return (
      <div id={anchorId} className="patch-card my-4 rounded-lg border border-accent-dim/40 bg-accent-glow/30 overflow-hidden scroll-mt-6">
        <div className="flex items-center gap-2.5 px-4 py-1.5 border-b border-accent-dim/30 bg-accent-glow/40">
          <VersionBadge version={section.version} date={ver?.date} accent />
          <span className="font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-accent/80">
            Update
          </span>
        </div>
        <div className="px-4 py-2">
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </div>
      </div>
    )
  }

  // ── Replaced section (has previous versions) ──
  if (section.previousVersions && section.previousVersions.length > 0) {
    const isBugfix = section.kind === 'bugfix'
    const isPlanned = section.kind === 'planned'
    return (
      <div id={anchorId} className="my-4 scroll-mt-6">
        <div className={`patch-card rounded-lg border overflow-hidden ${
          isPlanned
            ? 'border-violet-500/30 bg-violet-500/[0.06]'
            : isBugfix
              ? 'border-warning/25 bg-warning/[0.04]'
              : 'border-accent-dim/30 bg-accent-glow/20'
        }`}>
          <div className={`flex items-center gap-2.5 px-4 py-1.5 border-b ${
            isPlanned
              ? 'border-violet-500/20 bg-violet-500/[0.08]'
              : isBugfix
                ? 'border-warning/20 bg-warning/[0.06]'
                : 'border-accent-dim/20 bg-accent-glow/30'
          }`}>
            <VersionBadge version={section.version} date={ver?.date} accent={!isBugfix && !isPlanned} dim={isBugfix || isPlanned} />
            <span className={`font-mono text-[0.6rem] font-semibold tracking-[0.08em] uppercase ${
              isPlanned ? 'text-violet-400' : isBugfix ? 'text-warning/70' : 'text-accent/80'
            }`}>
              {isPlanned ? 'Planned' : isBugfix ? 'Bug Fix' : 'Update'}
            </span>
            <span className={`font-mono text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded ${
              isPlanned
                ? 'text-violet-400 bg-violet-500/10 border border-violet-500/25'
                : 'text-success bg-success/10 border border-success/25'
            }`}>
              {isPlanned ? 'planned' : 'current'}
            </span>
          </div>
          <div className="px-4 py-2">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        </div>

        {section.previousVersions.map(prev => {
          const prevVer = manifest.versions.find(v => v.version === prev.version)
          return (
            <details key={prev.version} className="mt-2 group">
              <summary className="flex items-center gap-3 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden px-1 py-1.5">
                <span className="text-[0.65rem] text-text-muted transition-transform group-open:rotate-90">&#9654;</span>
                <span className="font-mono text-[0.7rem] text-text-muted">
                  Previous version
                </span>
                <VersionBadge version={prev.version} date={prevVer?.date} dim />
                <div className="flex-1 h-px bg-border" />
              </summary>
              <div className="collapsed-content mt-2 pl-5 border-l-2 border-border opacity-50">
                <ReactMarkdown>{prev.content}</ReactMarkdown>
              </div>
            </details>
          )
        })}
      </div>
    )
  }

  // ── Normal base section (unchanged across versions) ──
  return (
    <div id={anchorId} className="my-1 scroll-mt-6">
      <ReactMarkdown
        components={{
          strong: ({ children }) => (
            <SectionAnchor title={String(children)} slug={slugify(String(children))} onClick={onSectionClick} heading />
          ),
        }}
      >
        {section.content}
      </ReactMarkdown>
    </div>
  )
}

/* ── Section Anchor (clickable title with # link) ────────────── */

function SectionAnchor({
  title,
  slug,
  onClick,
  heading,
  dim,
  inline,
}: {
  title: string
  slug: string
  onClick: (title: string) => void
  heading?: boolean
  dim?: boolean
  inline?: boolean
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClick(title)
    const el = document.getElementById(`s-${slug}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Copy URL to clipboard
    const url = window.location.origin + window.location.pathname + window.location.hash.split('/').slice(0, 2).join('/') + '/' + slug
    navigator.clipboard.writeText(url).catch(() => {})
  }

  if (inline) {
    return (
      <span
        className="font-body text-[0.82rem] text-text-dim cursor-pointer hover:text-text transition-colors group/anchor"
        onClick={handleClick}
      >
        {title}
        <span className="text-text-muted opacity-0 group-hover/anchor:opacity-100 transition-opacity ml-1">#</span>
      </span>
    )
  }

  if (heading) {
    return (
      <strong
        className="section-heading font-display font-semibold text-accent text-[1.15em] block mt-[2em] mb-[0.5em] cursor-pointer hover:text-accent/80 transition-colors group/anchor"
        onClick={handleClick}
      >
        {title}
        <span className="text-accent-dim opacity-0 group-hover/anchor:opacity-100 transition-opacity ml-2 text-[0.75em]">#</span>
      </strong>
    )
  }

  return (
    <span
      className={`font-body font-semibold text-[0.95rem] cursor-pointer transition-colors group/anchor ${
        dim ? 'text-text-muted hover:text-text-dim' : 'text-text hover:text-accent'
      }`}
      onClick={handleClick}
    >
      {title}
      <span className={`opacity-0 group-hover/anchor:opacity-100 transition-opacity ml-1 ${dim ? 'text-text-muted' : 'text-accent-dim'}`}>#</span>
    </span>
  )
}

/* ── Version Badge ───────────────────────────────────────────── */

function VersionBadge({
  version,
  date,
  accent,
  dim,
}: {
  version: string
  date?: string
  accent?: boolean
  dim?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[0.62rem] px-2 py-0.5 rounded border
        ${accent
          ? 'text-accent bg-accent-glow border-accent-dim'
          : dim
            ? 'text-text-muted bg-bg-raised border-border'
            : 'text-text-dim bg-bg-raised border-border'
        }`}
    >
      v{version}
      {date && <span className="text-text-muted">{date}</span>}
    </span>
  )
}

/* ── Welcome Screen ──────────────────────────────────────────── */

function Welcome({ manifest, view }: { manifest: DocsManifest; view: ViewMode }) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[860px] mx-auto px-12 pt-12 pb-30">
        <div className="text-center pt-28 pb-16 animate-[fade-up_0.6s_ease_both]">
          <div className="inline-block font-mono text-[0.75rem] font-medium text-accent bg-accent-glow border border-accent-dim rounded-full px-4 py-1 mb-6 tracking-[0.1em]">
            {view === 'current' ? 'Current State' : 'Changelog'}
          </div>
          <h1 className="font-display text-[2.4rem] font-bold tracking-[0.06em] text-text mb-4">
            Aurora 4x Documentation
          </h1>
          <p className="text-text-dim text-base leading-relaxed">
            {view === 'current'
              ? 'How the game works right now. Select a topic to begin.'
              : 'Full version history. Select a changelog entry to view.'}
          </p>
          <div className="flex justify-center gap-10 mt-12">
            <Stat value={manifest.topics.length} label="Topics" />
            <Stat value={manifest.categories.length} label="Categories" />
            <Stat value={manifest.versions.length} label="Versions" />
          </div>
        </div>
      </div>
    </main>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <span className="font-display text-[2rem] font-bold text-accent block leading-none">
        {value}
      </span>
      <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.1em] mt-2 block">
        {label}
      </span>
    </div>
  )
}
