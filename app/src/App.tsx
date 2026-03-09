import { useState, useCallback } from 'react'
import { manifest, type Topic, type HistoryEntry } from './manifest'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'

export type ViewMode = 'current' | 'changelog'

export interface ActiveSelection {
  topic: Topic
  entry: HistoryEntry
}

export default function App() {
  const [view, setView] = useState<ViewMode>('current')
  const [selection, setSelection] = useState<ActiveSelection | null>(null)

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
