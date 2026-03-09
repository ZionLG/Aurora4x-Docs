import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { type DocsManifest, type Topic, type HistoryEntry } from '../manifest'
import type { ViewMode, ActiveSelection } from '../App'

const DOCS_BASE = '/docs/'

interface Props {
  manifest: DocsManifest
  view: ViewMode
  selection: ActiveSelection | null
  onSelectEntry: (topic: Topic, entry?: HistoryEntry) => void
}

export default function ContentArea({ manifest, view, selection, onSelectEntry }: Props) {
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!selection) return

    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(DOCS_BASE + selection.entry.file)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then(md => {
        if (!cancelled) {
          setMarkdown(md)
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [selection])

  if (!selection) {
    return <Welcome manifest={manifest} view={view} />
  }

  const { topic, entry } = selection
  const ver = manifest.versions.find(v => v.version === entry.version)
  const cat = manifest.categories.find(c => c.id === topic.category)
  const latest = topic.history[0]
  const isOld = latest.version !== entry.version

  return (
    <main className="flex-1 overflow-y-auto scroll-smooth">
      <div className="max-w-[860px] mx-auto px-12 pt-12 pb-30 animate-[fade-up_0.35s_ease_both]">
        <article>
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-3 mb-3">
              {cat && (
                <span className="font-mono text-[0.7rem] text-text-dim tracking-[0.1em] uppercase">
                  {cat.label}
                </span>
              )}
              <span className="font-mono text-[0.7rem] text-accent tracking-[0.1em] uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-accent opacity-50" />
                v{entry.version}{ver ? ` — ${ver.date}` : ''}
              </span>
            </div>
            <h1 className="font-display text-[1.9rem] font-bold tracking-[0.03em] text-text leading-tight mb-2">
              {topic.title}
            </h1>

            {/* Version history pills */}
            {topic.history.length > 1 && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.08em]">
                  History:
                </span>
                {topic.history.map(h => (
                  <button
                    key={h.version}
                    onClick={() => onSelectEntry(topic, h)}
                    className={`font-mono text-[0.65rem] px-2.5 py-1 rounded border transition-all cursor-pointer
                      ${h.version === entry.version
                        ? 'text-accent bg-accent-glow border-accent-dim'
                        : 'text-text-muted bg-bg-raised border-border hover:text-text hover:border-border-bright'
                      }`}
                  >
                    v{h.version}{h.notes ? ` — ${h.notes}` : ''}
                  </button>
                ))}
              </div>
            )}

            {/* Superseded warning */}
            {isOld && (
              <div className="mt-5 px-4 py-3 rounded-md bg-danger/[0.06] border border-danger/20 text-danger/85 text-[0.85rem] leading-relaxed">
                This is from <strong className="!inline !text-inherit !text-[1em] !m-0">v{entry.version}</strong>.
                A newer version exists in <strong className="!inline !text-inherit !text-[1em] !m-0">v{latest.version}</strong>.
              </div>
            )}
          </div>

          {/* Body */}
          <div className="article-body text-[0.95rem] leading-[1.75] text-text">
            {loading && <p className="text-text-muted">Loading...</p>}
            {error && (
              <div>
                <p>Could not load <code>{entry.file}</code>: {error}</p>
                <p className="text-text-dim mt-4">
                  Make sure you're running <code>npm run dev</code> from the app directory.
                </p>
              </div>
            )}
            {!loading && !error && <ReactMarkdown>{markdown}</ReactMarkdown>}
          </div>
        </article>
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
