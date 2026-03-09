import { useEffect, useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { type DocsManifest, type Topic, type HistoryEntry } from '../manifest'
import type { ViewMode, ActiveSelection } from '../App'
import { parseSections, type MarkdownSection } from '../utils/extractSections'

const DOCS_BASE = '/docs/'

interface Props {
  manifest: DocsManifest
  view: ViewMode
  selection: ActiveSelection | null
  onSelectEntry: (topic: Topic, entry?: HistoryEntry) => void
}

interface LoadedEntry {
  entry: HistoryEntry
  sections: MarkdownSection[]
  error?: string
}

export default function ContentArea({ manifest, view, selection, onSelectEntry }: Props) {
  const [entries, setEntries] = useState<LoadedEntry[]>([])
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLElement>(null)

  // In "current" view: load ALL history entries for the topic (stacked)
  // In "changelog" view: load only the selected single entry
  useEffect(() => {
    if (!selection) return

    const toLoad = view === 'current'
      ? selection.topic.history
      : [selection.entry]

    let cancelled = false
    setLoading(true)

    Promise.all(
      toLoad.map(entry =>
        fetch(DOCS_BASE + entry.file)
          .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`)
            return r.text()
          })
          .then(raw => ({
            entry,
            sections: parseSections(raw, entry.sections, entry.deprecated),
          } as LoadedEntry))
          .catch(err => ({ entry, sections: [], error: err.message } as LoadedEntry))
      )
    ).then(results => {
      if (!cancelled) {
        setEntries(results)
        setLoading(false)
        scrollRef.current?.scrollTo(0, 0)
      }
    })

    return () => { cancelled = true }
  }, [selection, view])

  if (!selection) {
    return <Welcome manifest={manifest} view={view} />
  }

  const { topic } = selection
  const cat = manifest.categories.find(c => c.id === topic.category)

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

          {/* Version jump links (current view with multiple versions) */}
          {view === 'current' && topic.history.length > 1 && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.08em]">
                Versions:
              </span>
              {topic.history.map(h => {
                const ver = manifest.versions.find(v => v.version === h.version)
                return (
                  <a
                    key={h.version}
                    href={`#v${h.version}`}
                    className="font-mono text-[0.65rem] px-2.5 py-1 rounded border transition-all
                      text-text-muted bg-bg-raised border-border hover:text-accent hover:border-accent-dim"
                  >
                    v{h.version}{ver ? ` — ${ver.date}` : ''}
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Content */}
        {loading && <p className="text-text-muted">Loading...</p>}

        {!loading && entries.map(({ entry, sections, error }, i) => {
          const ver = manifest.versions.find(v => v.version === entry.version)
          const isFirst = i === 0
          const isLatest = entry.version === topic.history[0].version

          return (
            <section key={entry.version} id={`v${entry.version}`}>
              {/* Version divider (skip for single-entry or first in changelog view) */}
              {(view === 'current' || !isFirst) && (
                <div className={`flex items-center gap-3 ${isFirst ? 'mb-6' : 'mt-12 mb-6'}`}>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border
                    ${isLatest
                      ? 'bg-accent-glow border-accent-dim'
                      : 'bg-bg-raised border-border'
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] font-semibold tracking-[0.06em] uppercase
                      ${isLatest ? 'text-accent' : 'text-text-dim'}`}
                    >
                      v{entry.version}
                    </span>
                    {ver && (
                      <span className="font-mono text-[0.62rem] text-text-muted">
                        {ver.date}
                      </span>
                    )}
                    {isLatest && topic.history.length > 1 && (
                      <span className="font-mono text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded text-success bg-success/10 border border-success/25">
                        latest
                      </span>
                    )}
                  </div>
                  {entry.notes && (
                    <span className="font-body text-[0.8rem] text-text-dim italic">
                      {entry.notes}
                    </span>
                  )}
                  <div className="flex-1 h-px bg-border" />
                </div>
              )}

              {/* Markdown sections */}
              <div className="article-body text-[0.95rem] leading-[1.75] text-text">
                {error ? (
                  <p className="text-danger">Could not load <code>{entry.file}</code>: {error}</p>
                ) : (
                  sections.map((sec, si) => (
                    <div key={si} className={sec.deprecatedBy ? 'opacity-50' : ''}>
                      {sec.deprecatedBy && (
                        <div className="mb-3 mt-6 px-3 py-2 rounded border border-warning/20 bg-warning/[0.06] text-warning/85 text-[0.78rem] font-mono not-italic">
                          Superseded in v{sec.deprecatedBy}
                        </div>
                      )}
                      <ReactMarkdown>{sec.content}</ReactMarkdown>
                    </div>
                  ))
                )}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}

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
