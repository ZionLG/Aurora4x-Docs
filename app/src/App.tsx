import { useState, useCallback, useEffect } from 'react'
import { manifest, type Topic } from './manifest'
import { parseSections, type MarkdownSection } from './utils/extractSections'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import AdminPanel from './components/AdminPanel'

export type ViewMode = 'current' | 'changelog'

export interface ActiveSelection {
  topic: Topic
  version: string
}

/** Cache: version string → all parsed sections from that version's changelog file */
export type ChangelogCache = Record<string, MarkdownSection[]>

/** Cache: topic id → raw markdown content of the base document */
export type BaseDocsCache = Record<string, string>

/** Encode current state into URL hash */
function toHash(view: ViewMode, sel: ActiveSelection | null): string {
  if (!sel) return `#${view}`
  if (view === 'changelog') {
    return `#changelog/${sel.topic.id}/${sel.version}`
  }
  return `#current/${sel.topic.id}`
}

function isAdminHash(): boolean {
  return window.location.hash.replace(/^#/, '') === 'admin'
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

  if (view === 'changelog' && version) {
    return { view, selection: { topic, version } }
  } else {
    return { view, selection: { topic, version: manifest.versions[0].version } }
  }
}

export default function App() {
  const initial = fromHash()
  const [view, setView] = useState<ViewMode>(initial.view)
  const [selection, setSelection] = useState<ActiveSelection | null>(initial.selection)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [admin, setAdmin] = useState(isAdminHash)

  const [changelogCache, setChangelogCache] = useState<ChangelogCache>({})
  const [baseDocsCache, setBaseDocsCache] = useState<BaseDocsCache>({})
  const [cacheReady, setCacheReady] = useState(false)

  // Load all version changelog files + base docs on app init
  useEffect(() => {
    const versionsWithFiles = manifest.versions.filter(v => v.file)
    const changelogPromise = Promise.all(
      versionsWithFiles.map(v =>
        fetch(`/docs/${v.file!}`)
          .then(r => r.text())
          .then(raw => ({ version: v.version, sections: parseSections(raw) }))
          .catch(() => ({ version: v.version, sections: [] as MarkdownSection[] }))
      )
    )

    const topicsWithBase = manifest.topics.filter(t => t.base)
    const baseDocsPromise = Promise.all(
      topicsWithBase.map(t =>
        fetch(`/docs/${t.base!}`)
          .then(r => r.text())
          .then(raw => ({ id: t.id, content: raw }))
          .catch(() => ({ id: t.id, content: '' }))
      )
    )

    Promise.all([changelogPromise, baseDocsPromise]).then(([clResults, bdResults]) => {
      const cache: ChangelogCache = {}
      for (const { version, sections } of clResults) {
        cache[version] = sections
      }
      setChangelogCache(cache)

      const baseDocs: BaseDocsCache = {}
      for (const { id, content } of bdResults) {
        if (content) baseDocs[id] = content
      }
      setBaseDocsCache(baseDocs)

      setCacheReady(true)
    })
  }, [])

  // Update URL hash when state changes (preserve section slug if same topic)
  useEffect(() => {
    const newHash = toHash(view, selection)
    const currentHash = window.location.hash
    if (currentHash.startsWith(newHash + '/') || currentHash === newHash) return
    window.history.pushState(null, '', newHash)
  }, [view, selection])

  // Handle browser back/forward
  useEffect(() => {
    const onPop = () => {
      if (isAdminHash()) {
        setAdmin(true)
        return
      }
      setAdmin(false)
      const { view: v, selection: s } = fromHash()
      setView(v)
      setSelection(s)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const handleSelect = useCallback((topic: Topic, version?: string) => {
    const v = version ?? manifest.versions[0].version
    setSelection({ topic, version: v })
    setSidebarOpen(false)
  }, [])

  const toggleView = useCallback(() => {
    setView(v => v === 'current' ? 'changelog' : 'current')
    setSelection(null)
  }, [])

  if (admin) {
    return (
      <>
        <div className="scanline-overlay" />
        <div className="grid-bg" />
        <div className="flex h-screen relative z-1">
          <AdminPanel />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="scanline-overlay" />
      <div className="grid-bg" />
      <div className="flex h-screen relative z-1">
        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-[99] md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar
          manifest={manifest}
          view={view}
          selection={selection}
          onSelect={handleSelect}
          onToggleView={toggleView}
          changelogCache={changelogCache}
          baseDocsCache={baseDocsCache}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <ContentArea
          manifest={manifest}
          view={view}
          selection={selection}
          changelogCache={changelogCache}
          cacheReady={cacheReady}
          onSelectEntry={handleSelect}
          onOpenSidebar={() => setSidebarOpen(true)}
        />
      </div>
    </>
  )
}
