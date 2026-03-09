import { useState, useCallback, useEffect } from 'react'
import { manifest, type Topic, type HistoryEntry } from './manifest'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'

export type ViewMode = 'current' | 'changelog'

export interface ActiveSelection {
  topic: Topic
  entry: HistoryEntry
}

/** Encode current state into URL hash */
function toHash(view: ViewMode, sel: ActiveSelection | null): string {
  if (!sel) return `#${view}`
  if (view === 'changelog') {
    return `#changelog/${sel.topic.id}/${sel.entry.version}`
  }
  return `#current/${sel.topic.id}`
}

/** Parse URL hash into state */
function fromHash(): { view: ViewMode; selection: ActiveSelection | null } {
  const hash = window.location.hash.replace(/^#/, '')
  const parts = hash.split('/')

  const view: ViewMode = parts[0] === 'changelog' ? 'changelog' : 'current'
  const topicId = parts[1]
  const version = parts[2]

  if (!topicId) return { view, selection: null }

  const topic = manifest.topics.find(t => t.id === topicId)
  if (!topic) return { view, selection: null }

  let entry: HistoryEntry
  if (view === 'changelog' && version) {
    entry = topic.history.find(h => h.version === version) ?? topic.history[0]
  } else {
    entry = topic.history[0]
  }

  return { view, selection: { topic, entry } }
}

export default function App() {
  const initial = fromHash()
  const [view, setView] = useState<ViewMode>(initial.view)
  const [selection, setSelection] = useState<ActiveSelection | null>(initial.selection)

  // Update URL hash when state changes (preserve section slug if same topic)
  useEffect(() => {
    const newHash = toHash(view, selection)
    const currentHash = window.location.hash
    // Don't overwrite if the current hash is the same base with a section anchor
    // e.g. don't replace #current/engines/engine-tech with #current/engines
    if (currentHash.startsWith(newHash + '/') || currentHash === newHash) return
    window.history.pushState(null, '', newHash)
  }, [view, selection])

  // Handle browser back/forward
  useEffect(() => {
    const onPop = () => {
      const { view: v, selection: s } = fromHash()
      setView(v)
      setSelection(s)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const handleSelect = useCallback((topic: Topic, entry?: HistoryEntry) => {
    const e = entry ?? topic.history[0]
    setSelection({ topic, entry: e })
  }, [])

  const toggleView = useCallback(() => {
    setView(v => v === 'current' ? 'changelog' : 'current')
    setSelection(null)
  }, [])

  return (
    <>
      <div className="scanline-overlay" />
      <div className="grid-bg" />
      <div className="flex h-screen relative z-1">
        <Sidebar
          manifest={manifest}
          view={view}
          selection={selection}
          onSelect={handleSelect}
          onToggleView={toggleView}
        />
        <ContentArea
          manifest={manifest}
          view={view}
          selection={selection}
          onSelectEntry={handleSelect}
        />
      </div>
    </>
  )
}
