import { useState, useMemo } from 'react'
import { type DocsManifest, type Topic } from '../manifest'
import type { ViewMode, ActiveSelection } from '../App'

interface Props {
  manifest: DocsManifest
  view: ViewMode
  selection: ActiveSelection | null
  onSelect: (topic: Topic, version?: string) => void
  onToggleView: () => void
}

export default function Sidebar({ manifest, view, selection, onSelect, onToggleView }: Props) {
  const [search, setSearch] = useState('')
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const q = search.toLowerCase().trim()

  const toggle = (id: string) =>
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }))

  // Group data based on view mode
  const groups = useMemo(() => {
    if (view === 'current') {
      return manifest.categories.map(cat => ({
        id: cat.id,
        label: cat.label,
        items: manifest.topics
          .filter(t => t.category === cat.id)
          .map(t => ({ topic: t, version: manifest.versions[0].version })),
      })).filter(g => g.items.length > 0)
    } else {
      return manifest.versions.map(ver => {
        let topicItems;
        if (ver.version === '1.0.0') {
          // Show all topics with a base document
          topicItems = manifest.topics
            .filter(t => t.base)
            .map(t => ({ topic: t, version: ver.version }))
        } else {
          topicItems = (manifest.versionTopics[ver.version] || [])
            .map(id => manifest.topics.find(t => t.id === id)!)
            .filter(Boolean)
            .map(t => ({ topic: t, version: ver.version }))
        }
        return { id: ver.version, label: ver.label, items: topicItems }
      }).filter(g => g.items.length > 0)
    }
  }, [manifest, view])

  return (
    <aside className="sidebar-edge relative z-[100] w-80 min-w-80 h-screen flex flex-col bg-bg-base border-r border-border">
      {/* Logo */}
      <div className="px-5 pt-5 pb-4 border-b border-border shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 shrink-0 animate-[slow-rotate_30s_linear_infinite]">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="20" cy="20" r="12" stroke="var(--color-accent)" strokeWidth="1"/>
              <circle cx="20" cy="20" r="3" fill="var(--color-accent)"/>
              <line x1="20" y1="2" x2="20" y2="10" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"/>
              <line x1="20" y1="30" x2="20" y2="38" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"/>
              <line x1="2" y1="20" x2="10" y2="20" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"/>
              <line x1="30" y1="20" x2="38" y2="20" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"/>
              <ellipse cx="20" cy="20" rx="18" ry="7" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" transform="rotate(35 20 20)"/>
              <ellipse cx="20" cy="20" rx="18" ry="7" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" transform="rotate(-35 20 20)"/>
            </svg>
          </div>
          <div>
            <span className="font-display text-[1.35rem] font-bold tracking-[0.2em] text-accent block leading-none">
              AURORA
            </span>
            <span className="font-mono text-[0.65rem] text-text-dim tracking-[0.08em] uppercase block mt-1">
              Documentation Archive
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-3 shrink-0">
        <div className="relative flex items-center">
          <svg className="absolute left-3 w-4 h-4 text-text-muted pointer-events-none" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search topics..."
            className="w-full py-2.5 pl-9 pr-10 font-mono text-[0.8rem] text-text bg-bg-raised border border-border rounded-md outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow),inset_0_0_12px_var(--color-accent-glow)] placeholder:text-text-muted"
          />
          <kbd className="absolute right-2.5 font-mono text-[0.7rem] text-text-muted bg-bg-surface border border-border rounded px-1.5 py-0.5 leading-tight pointer-events-none">
            /
          </kbd>
        </div>
      </div>

      {/* View toggle */}
      <div className="px-4 pb-3 shrink-0">
        <button
          onClick={onToggleView}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 font-mono text-[0.72rem] tracking-[0.06em] uppercase rounded-md border transition-all cursor-pointer
            border-border text-text-dim bg-bg-raised hover:border-accent-dim hover:text-accent"
        >
          <span>{view === 'current' ? 'Viewing: Current State' : 'Viewing: Changelog'}</span>
          <svg className="w-3 h-3 opacity-50" viewBox="0 0 12 12" fill="none">
            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-1">
        {groups.map(group => {
          const isCollapsed = collapsed[group.id] ?? false
          const filtered = group.items.filter(
            ({ topic }) => !q || topic.title.toLowerCase().includes(q) || topic.category.includes(q)
          )
          if (q && filtered.length === 0) return null

          return (
            <div key={group.id}>
              <div
                className="flex items-center gap-2.5 px-5 pt-3 pb-2 cursor-pointer select-none transition-colors hover:text-accent"
                onClick={() => toggle(group.id)}
              >
                <svg
                  className={`w-3 h-3 text-text-muted shrink-0 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`}
                  viewBox="0 0 12 12" fill="none"
                >
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-display text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-text-dim">
                  {group.label}
                </span>
                <span className="font-mono text-[0.65rem] text-text-muted ml-auto">
                  {filtered.length}
                </span>
              </div>

              {!isCollapsed && (
                <div>
                  {filtered.map(({ topic, version }) => {
                    const isActive = selection?.topic.id === topic.id &&
                      selection?.version === version
                    const latestVer = manifest.versions.find(v =>
                      v.version === '1.0.0' ? !!topic.base : manifest.versionTopics[v.version]?.includes(topic.id)
                    )?.version
                    const isLatest = version === latestVer
                    const versionCount = manifest.versions.filter(v =>
                      v.version === '1.0.0' ? !!topic.base : manifest.versionTopics[v.version]?.includes(topic.id)
                    ).length
                    const hasMulti = versionCount > 1

                    return (
                      <div
                        key={topic.id + version}
                        onClick={() => onSelect(topic, version)}
                        className={`flex items-center gap-2 py-[7px] px-5 pl-7 text-[0.82rem] cursor-pointer transition-all border-l-2
                          ${isActive
                            ? 'text-accent bg-accent-glow border-l-accent'
                            : 'text-text-dim border-l-transparent hover:text-text hover:bg-bg-hover hover:border-l-border-bright'
                          }
                          ${view === 'changelog' && !isLatest ? 'opacity-60' : ''}
                        `}
                      >
                        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                          {topic.title}
                        </span>
                        {view === 'changelog' && !isLatest && (
                          <span className="font-mono text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded text-danger bg-danger/10 border border-danger/25 shrink-0">
                            old
                          </span>
                        )}
                        {view === 'current' && hasMulti && (
                          <span className="font-mono text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded text-warning bg-warning/10 border border-warning/25 shrink-0">
                            v{latestVer}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-border shrink-0">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_6px_var(--color-success)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
          <span>{manifest.topics.length} topics loaded</span>
        </div>
      </div>
    </aside>
  )
}
