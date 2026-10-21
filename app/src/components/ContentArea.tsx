import { useMemo, useState, useRef, useCallback, type MouseEvent as ReactMouseEvent } from 'react'
import type { Components } from 'react-markdown'
import DocsMarkdown from './DocsMarkdown'
import Spoiler from './Spoiler'
import SpoilerText from './SpoilerText'
import { useSpoilerRegion } from '../hooks/useSpoilerRegion'
import { useSpoilers } from '../hooks/useSpoilers'
import { isSpoilerSection, spoilerSafeText } from '../utils/spoilers'
import { sharePath, shareUrlFromHash, sectionAnchors } from '../utils/shareLinks'
import { type DocsManifest } from '../manifest'
import type { ViewMode, ActiveSelection, BaseDocsCache } from '../App'
import { parseSections, type MarkdownSection } from '../utils/extractSections'
import { mergeTopicContent, type MergedSection } from '../utils/mergeContent'
import { useNotes } from '../hooks/useNotes'
import CommunityNoteCard from './CommunityNoteCard'
import AddNoteForm from './AddNoteForm'
import { useSectionNavigation } from '../hooks/useSectionNavigation'

interface Props {
  manifest: DocsManifest
  view: ViewMode
  selection: ActiveSelection | null
  changelogCache: Record<string, MarkdownSection[]>
  baseDocsCache: BaseDocsCache
  cacheReady: boolean
  onOpenSidebar: () => void
}

export default function ContentArea({ manifest, view, selection, changelogCache, baseDocsCache, cacheReady, onOpenSidebar }: Props) {
  const scrollRef = useRef<HTMLElement>(null)
  const articleRef = useRef<HTMLDivElement>(null)
  const { notesBySection, submitNote } = useNotes(selection?.topic.id ?? null)
  const latestVersion = manifest.versions.find(v => !v.unreleased)?.version ?? manifest.versions[0].version
  const loading = !!selection && !cacheReady

  // Render from the same loaded documents as search so anchors never target the previous topic.
  const { mergedSections, changelogSections } = useMemo(() => {
    const empty = { mergedSections: null, changelogSections: [] as MarkdownSection[] }
    if (!selection || !cacheReady) return empty
    const { topic, version } = selection
    const baseSections = parseSections(baseDocsCache[topic.id] || '')
    if (view === 'current') {
      const versionSections = manifest.versions
        .filter(v => v.file && changelogCache[v.version])
        .map(v => ({ version: v.version, sections: changelogCache[v.version] }))
        .reverse()
      const merged = mergeTopicContent(topic.id, baseSections, '1.0.0', versionSections, manifest.sectionMap, topic.deprecated)
      const unreleasedVersions = new Set(manifest.versions.filter(v => v.unreleased).map(v => v.version))
      for (const section of merged) {
        if (unreleasedVersions.has(section.version)) section.kind = 'planned'
      }
      return { mergedSections: merged, changelogSections: [] as MarkdownSection[] }
    }
    if (version === '1.0.0' && topic.base) {
      return { mergedSections: null, changelogSections: baseSections }
    }
    const filtered = (changelogCache[version] || []).filter(section => {
      const entry = manifest.sectionMap[section.title]
      return Array.isArray(entry) ? entry.some(route => route.topic === topic.id) : entry?.topic === topic.id
    })
    return { mergedSections: null, changelogSections: filtered }
  }, [manifest, selection, view, changelogCache, baseDocsCache, cacheReady])
  const renderedSections = mergedSections ?? changelogSections
  const anchors = useMemo(() => sectionAnchors(renderedSections), [renderedSections])
  const navigate = useSectionNavigation(scrollRef, articleRef, !!selection && cacheReady, renderedSections)

  const handleSectionClick = useCallback((slug: string) => {
    if (!selection) return
    const base = view === 'changelog'
      ? `changelog/${selection.topic.id}/${selection.version}`
      : `current/${selection.topic.id}`
    window.history.replaceState(null, '', `#${base}/${slug}`)
    navigate(slug)
  }, [view, selection, navigate])

  if (!selection) {
    return <Welcome manifest={manifest} view={view} onOpenSidebar={onOpenSidebar} />
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
    <main ref={scrollRef} className="flex-1 overflow-y-auto">
      {/* Mobile header */}
      <div data-scroll-sticky className="md:hidden sticky top-0 z-20 flex items-center gap-3 px-4 py-3 bg-bg-base/95 backdrop-blur-sm border-b border-border">
        <button
          onClick={onOpenSidebar}
          className="w-9 h-9 flex items-center justify-center text-text-dim hover:text-accent transition-colors cursor-pointer rounded-md border border-border hover:border-accent-dim"
          aria-label="Open navigation"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="font-display text-[0.95rem] font-semibold text-text truncate">
          {topic.title}
        </span>
      </div>
      <div ref={articleRef} className="max-w-[860px] mx-auto px-4 pt-6 pb-20 md:px-12 md:pt-12 md:pb-30">
        {/* Topic header */}
        <div className="mb-10 pb-6 border-b border-border">
          {cat && (
            <span className="font-mono text-[0.7rem] text-text-dim tracking-[0.1em] uppercase block mb-3">
              {cat.label}
            </span>
          )}
          <h1 className="font-display text-[1.4rem] md:text-[1.9rem] font-bold tracking-[0.03em] text-text leading-tight">
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
              <CopyMdButton topicId={topic.id} />
            </div>
          )}
          <CopyLinkButton key={`${view}/${topic.id}/${selection.version}`} view={view} selection={selection} />
          <p className="mt-3 text-[0.72rem] text-text-dim">
            Click or press Enter on scrambled text to reveal its section. Copy MD includes all spoilers.
          </p>
        </div>

        {loading && <p className="text-text-muted">Loading...</p>}

        {/* CURRENT VIEW: Merged content */}
        {!loading && view === 'current' && mergedSections && (() => {
          const hasMisc = mergedSections.some(s => s.isMisc)
          const firstMiscIdx = mergedSections.findIndex(s => s.isMisc)
          return (
            <>
              <TableOfContents
                items={mergedSections.map((s, i) => ({
                  title: s.title,
                  slug: anchors[i],
                  kind: s.kind,
                  isPatch: s.isPatch,
                  deprecatedBy: s.deprecatedBy,
                }))}
                onNavigate={handleSectionClick}
              />
              <div className="article-body text-[0.95rem] leading-[1.75] text-text">
                {mergedSections.map((sec, i) => {
                  const sectionNotes = notesBySection.get(sec.title) || []
                  return (
                    <div key={`${sec.title}-${i}`} id={`s-${anchors[i]}`} className="scroll-mt-6">
                      {hasMisc && i === firstMiscIdx && (
                        <div className="flex items-center gap-3 mt-12 mb-4">
                          <div className="flex-1 h-px bg-border" />
                          <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.1em]">
                            Additional Notes
                          </span>
                          <div className="flex-1 h-px bg-border" />
                        </div>
                      )}
                      <ProtectedSection title={sec.title} content={sec.content}>
                        <MergedSectionBlock section={sec} slug={anchors[i]} manifest={manifest} onSectionClick={handleSectionClick} />
                        <CopyLinkButton view={view} selection={selection} sectionSlug={anchors[i]} />
                      {!sec.isPatch && !sec.deprecatedBy && (
                        <>
                          {sectionNotes.map(note => (
                            <CommunityNoteCard key={note.id} note={note} latestVersion={latestVersion} />
                          ))}
                          <AddNoteForm
                            topicId={selection!.topic.id}
                            sectionTitle={sec.title}
                            versions={manifest.versions}
                            onSubmit={submitNote}
                          />
                        </>
                      )}
                      </ProtectedSection>
                    </div>
                  )
                })}
              </div>
            </>
          )
        })()}

        {/* CHANGELOG VIEW: Single version's sections for this topic */}
        {!loading && view === 'changelog' && changelogSections.length > 0 && (
          <>
            <TableOfContents
              items={changelogSections.map((s, i) => ({ title: s.title, slug: anchors[i] }))}
              onNavigate={handleSectionClick}
            />
            <div className="article-body text-[0.95rem] leading-[1.75] text-text">
              {changelogSections.map((sec, si) => (
                <div key={si} id={`s-${anchors[si]}`} className="scroll-mt-6">
                  <ProtectedSection title={sec.title} content={sec.content}>
                    <SectionMarkdown content={sec.content} title={sec.title} slug={anchors[si]} onSectionClick={handleSectionClick} />
                    <CopyLinkButton view={view} selection={selection} sectionSlug={anchors[si]} />
                  </ProtectedSection>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}

/* ── Table of Contents ───────────────────────────────────────── */

function ProtectedSection({ title, content, children }: { title: string; content: string; children: React.ReactNode }) {
  return isSpoilerSection(title)
    ? <Spoiler key={content} text={content} block>{children}</Spoiler>
    : children
}

interface TocItem {
  title: string
  slug: string
  kind?: 'update' | 'bugfix' | 'planned'
  isPatch?: boolean
  deprecatedBy?: string
}

function TableOfContents({ items, onNavigate }: {
  items: TocItem[]
  onNavigate: (slug: string) => void
}) {
  const [open, setOpen] = useState(false)
  const { alwaysShowSpoilers } = useSpoilers()

  if (items.length <= 2) return null

  const handleScrollTo = (slug: string) => {
    setOpen(false)
    onNavigate(slug)
  }

  return (
    <div data-scroll-sticky className="mb-8 border border-border rounded-lg overflow-hidden sticky top-[calc(3.75rem+1px)] md:top-0 z-10 bg-bg-base shadow-lg shadow-black/40">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left cursor-pointer bg-bg-raised/50 hover:bg-bg-hover transition-colors"
      >
        <svg
          className={`w-3 h-3 text-text-muted shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          viewBox="0 0 12 12" fill="none"
        >
          <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-mono text-[0.7rem] text-text-dim uppercase tracking-[0.1em]">
          Contents
        </span>
        <span className="font-mono text-[0.62rem] text-text-muted ml-auto">
          {items.length} sections
        </span>
      </button>
      {open && (
        <div className="px-4 pb-3 pt-1 columns-1 md:columns-2 gap-x-6 border-t border-border bg-bg-base">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => handleScrollTo(item.slug)}
              className={`block w-full text-left py-[3px] text-[0.78rem] truncate cursor-pointer transition-colors break-inside-avoid ${
                item.deprecatedBy
                  ? 'text-text-muted line-through opacity-40 hover:opacity-70'
                  : item.kind === 'planned'
                    ? 'text-violet-400/70 hover:text-violet-300'
                    : item.kind === 'bugfix'
                      ? 'text-warning/60 hover:text-warning/90'
                      : item.isPatch
                        ? 'text-accent/70 hover:text-accent'
                        : 'text-text-dim hover:text-text'
              }`}
            >
              {alwaysShowSpoilers ? item.title : isSpoilerSection(item.title) ? '[Spoiler section]' : spoilerSafeText(item.title)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Merged Section Renderer ─────────────────────────────────── */

function MergedSectionBlock({
  section,
  slug,
  manifest,
  onSectionClick,
}: {
  section: MergedSection
  slug: string
  manifest: DocsManifest
  onSectionClick: (slug: string) => void
}) {
  const ver = manifest.versions.find(v => v.version === section.version)

  // ── Deprecated section (no replacement, collapsed by default) ──
  if (section.deprecatedBy) {
    return (
      <details className="my-6 group scroll-mt-6">
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
          <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
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
        <details className="my-3 group scroll-mt-6">
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
            <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
          </div>
        </details>
      )
    }

    // Planned: expanded, violet styling
    if (isPlanned) {
      return (
        <div className="patch-card my-4 rounded-lg border border-violet-500/30 bg-violet-500/[0.06] overflow-hidden scroll-mt-6">
          <div className="flex items-center gap-2.5 px-4 py-1.5 border-b border-violet-500/20 bg-violet-500/[0.08]">
            <VersionBadge version={section.version} date={ver?.date} dim />
            <span className="font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-violet-400">
              Planned
            </span>
          </div>
          <div className="px-4 py-2">
            <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
          </div>
        </div>
      )
    }

    // Updates: expanded, accent styling
    return (
      <div className="patch-card my-4 rounded-lg border border-accent-dim/40 bg-accent-glow/30 overflow-hidden scroll-mt-6">
        <div className="flex items-center gap-2.5 px-4 py-1.5 border-b border-accent-dim/30 bg-accent-glow/40">
          <VersionBadge version={section.version} date={ver?.date} accent />
          <span className="font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-accent/80">
            Update
          </span>
        </div>
        <div className="px-4 py-2">
          <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
        </div>
      </div>
    )
  }

  // ── Replaced section (has previous versions) ──
  if (section.previousVersions && section.previousVersions.length > 0) {
    const isBugfix = section.kind === 'bugfix'
    const isPlanned = section.kind === 'planned'
    return (
      <div className="my-4 scroll-mt-6">
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
            <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
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
                <SectionMarkdown content={prev.content} title={parseSections(prev.content)[0]?.title ?? section.title} slug={slug} onSectionClick={onSectionClick} />
              </div>
            </details>
          )
        })}
      </div>
    )
  }

  // ── Normal base section (unchanged across versions) ──
  return (
    <div className="my-1 scroll-mt-6">
      <SectionMarkdown content={section.content} title={section.title} slug={slug} onSectionClick={onSectionClick} />
    </div>
  )
}

function SectionMarkdown({ content, title, slug, onSectionClick }: {
  content: string
  title: string
  slug: string
  onSectionClick: (slug: string) => void
}) {
  const components = useMemo<Components>(() => ({
    strong: ({ node, children }) => node?.position?.start.line === 1
      && node.position.start.column === 1 && markdownText(node) === title
      ? <SectionAnchor title={title} slug={slug} onClick={onSectionClick} heading />
      : <strong>{children}</strong>,
  }), [title, slug, onSectionClick])
  return (
    <DocsMarkdown components={components}>{content}</DocsMarkdown>
  )
}

/* ── Section Anchor (clickable title with # link) ────────────── */

interface TextNode { value?: string; children?: TextNode[] }

function markdownText(node: TextNode): string {
  return node.value ?? (node.children ?? []).map(markdownText).join('')
}

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
  onClick: (slug: string) => void
  heading?: boolean
  dim?: boolean
  inline?: boolean
}) {
  const protectedSection = useSpoilerRegion()
  const label = protectedSection ? <SpoilerText>{title}</SpoilerText> : title
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClick(slug)
    // Copy URL to clipboard
    const url = shareUrlFromHash(window.location.hash, window.location.origin)
    navigator.clipboard.writeText(url).catch(() => {})
  }

  if (inline) {
    return (
      <button
        type="button"
        title="Copy link to this section"
        className="font-body text-left text-[0.82rem] text-text-dim cursor-pointer hover:text-text transition-colors group/anchor rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        onClick={handleClick}
      >
        {label}
        <span aria-hidden="true" className="text-text-muted opacity-0 group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100 transition-opacity ml-1">#</span>
      </button>
    )
  }

  if (heading) {
    return (
      <strong
        className="section-heading font-display font-semibold text-accent text-[1.15em] block mt-[2em] mb-[0.5em]"
      >
        <button
          type="button"
          title="Copy link to this section"
          className="text-left cursor-pointer hover:text-accent/80 transition-colors group/anchor rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={handleClick}
        >
          {label}
          <span aria-hidden="true" className="text-accent-dim opacity-0 group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100 transition-opacity ml-2 text-[0.75em]">#</span>
        </button>
      </strong>
    )
  }

  return (
    <button
      type="button"
      title="Copy link to this section"
      className={`font-body text-left font-semibold text-[0.95rem] cursor-pointer transition-colors group/anchor rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        dim ? 'text-text-muted hover:text-text-dim' : 'text-text hover:text-accent'
      }`}
      onClick={handleClick}
    >
      {label}
      <span aria-hidden="true" className={`opacity-0 group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100 transition-opacity ml-1 ${dim ? 'text-text-muted' : 'text-accent-dim'}`}>#</span>
    </button>
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

function Welcome({ manifest, view, onOpenSidebar }: { manifest: DocsManifest; view: ViewMode; onOpenSidebar: () => void }) {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Mobile header */}
      <div className="md:hidden sticky top-0 z-20 flex items-center gap-3 px-4 py-3 bg-bg-base/95 backdrop-blur-sm border-b border-border">
        <button
          onClick={onOpenSidebar}
          className="w-9 h-9 flex items-center justify-center text-text-dim hover:text-accent transition-colors cursor-pointer rounded-md border border-border hover:border-accent-dim"
          aria-label="Open navigation"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="font-display text-[0.95rem] font-semibold text-accent tracking-[0.1em]">
          AURORA
        </span>
      </div>
      <div className="max-w-[860px] mx-auto px-4 pt-6 pb-20 md:px-12 md:pt-12 md:pb-30">
        <div className="text-center pt-12 pb-10 md:pt-28 md:pb-16 animate-[fade-up_0.6s_ease_both]">
          <div className="inline-block font-mono text-[0.75rem] font-medium text-accent bg-accent-glow border border-accent-dim rounded-full px-4 py-1 mb-6 tracking-[0.1em]">
            {view === 'current' ? 'Current State' : 'Changelog'}
          </div>
          <h1 className="font-display text-[1.6rem] md:text-[2.4rem] font-bold tracking-[0.06em] text-text mb-4">
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

/* ── Copy as Markdown Button ────────────────────────────────── */

function CopyLinkButton({ view, selection, sectionSlug }: { view: ViewMode; selection: ActiveSelection; sectionSlug?: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const copy = async () => {
    const url = new URL(sharePath(view, selection.topic.id, selection.version, sectionSlug), window.location.origin).href
    try {
      await navigator.clipboard.writeText(url)
      setState('copied')
    } catch {
      setState('failed')
    }
  }
  return (
    <button type="button" onClick={copy} className="mt-3 font-mono text-[0.65rem] px-2.5 py-1 rounded border border-border text-text-dim hover:text-accent cursor-pointer" title="Copy a link with a preview for Discord">
      {state === 'copied' ? 'Link copied!' : state === 'failed' ? 'Copy failed — try again' : sectionSlug ? 'Copy section link' : 'Copy link for Discord'}
    </button>
  )
}

function CopyMdButton({ topicId }: { topicId: string }) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const handleClick = async (e: ReactMouseEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`/current/${topicId}.md`)
      if (!res.ok) throw new Error()
      const md = await res.text()
      await navigator.clipboard.writeText(md)
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    } catch {
      // silent fail
    }
  }

  return (
    <button
      onClick={handleClick}
      className="ml-auto font-mono text-[0.62rem] px-2.5 py-1 rounded border cursor-pointer
        transition-colors border-border text-text-muted bg-bg-raised
        hover:border-accent-dim hover:text-accent"
    >
      {state === 'copied' ? 'Copied!' : 'Copy MD'}
    </button>
  )
}
