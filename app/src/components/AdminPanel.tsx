import { useState, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

interface AdminNote {
  id: string
  topic_id: string
  section_title: string
  author_name: string
  content: string
  correct_as_of: string
  created_at: string
  approved: boolean
}

export default function AdminPanel() {
  const [secret, setSecret] = useState(() => sessionStorage.getItem('aurora-admin-secret') || '')
  const [authenticated, setAuthenticated] = useState(false)
  const [notes, setNotes] = useState<AdminNote[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchNotes = useCallback(async (token: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/notes', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 401) {
        setAuthenticated(false)
        sessionStorage.removeItem('aurora-admin-secret')
        setError('Invalid admin secret')
        return
      }
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setNotes(data)
      setAuthenticated(true)
      sessionStorage.setItem('aurora-admin-secret', token)
    } catch {
      setError('Failed to connect')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (secret) fetchNotes(secret)
  }, [])

  const handleLogin = () => {
    if (secret.trim()) fetchNotes(secret.trim())
  }

  const handleAction = async (id: string, action: 'approve' | 'reject') => {
    try {
      const res = await fetch('/api/admin/notes', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ id, action }),
      })
      if (!res.ok) throw new Error()
      setNotes(prev => action === 'reject'
        ? prev.filter(n => n.id !== id)
        : prev.map(n => n.id === id ? { ...n, approved: true } : n)
      )
    } catch {
      setError(`Failed to ${action} note`)
    }
  }

  const pending = notes.filter(n => !n.approved)
  const approved = notes.filter(n => n.approved)

  if (!authenticated) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto px-6 pt-32">
          <h1 className="font-display text-[1.5rem] font-bold text-text mb-2">Admin Panel</h1>
          <p className="text-text-dim text-[0.85rem] mb-6">Enter your admin secret to manage community notes.</p>
          {error && <div className="text-danger font-mono text-[0.75rem] mb-3">{error}</div>}
          <input
            type="password"
            value={secret}
            onChange={e => setSecret(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            placeholder="Admin secret..."
            className="w-full py-2.5 px-4 font-mono text-[0.85rem] text-text bg-bg-raised border border-border rounded-md outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)] placeholder:text-text-muted mb-3"
          />
          <button
            onClick={handleLogin}
            disabled={loading || !secret.trim()}
            className="px-5 py-2 font-mono text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-bg-deep bg-accent rounded-md transition-all cursor-pointer hover:bg-accent/80 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Connecting...' : 'Sign In'}
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-[900px] mx-auto px-4 md:px-12 pt-8 pb-20">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
          <h1 className="font-display text-[1.5rem] font-bold text-text">Community Notes Admin</h1>
          <button
            onClick={() => { setAuthenticated(false); sessionStorage.removeItem('aurora-admin-secret') }}
            className="ml-auto font-mono text-[0.7rem] text-text-muted hover:text-danger transition-colors cursor-pointer"
          >
            Sign out
          </button>
        </div>

        {error && <div className="text-danger font-mono text-[0.75rem] mb-4">{error}</div>}

        {/* Pending notes */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-display text-[1.1rem] font-semibold text-warning">Pending Review</h2>
            <span className="font-mono text-[0.7rem] text-text-muted">{pending.length}</span>
          </div>

          {pending.length === 0 && (
            <p className="text-text-muted font-mono text-[0.8rem]">No notes pending review.</p>
          )}

          {pending.map(note => (
            <NoteReviewCard key={note.id} note={note} onAction={handleAction} />
          ))}
        </section>

        {/* Approved notes */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-display text-[1.1rem] font-semibold text-success">Approved</h2>
            <span className="font-mono text-[0.7rem] text-text-muted">{approved.length}</span>
          </div>

          {approved.length === 0 && (
            <p className="text-text-muted font-mono text-[0.8rem]">No approved notes yet.</p>
          )}

          {approved.map(note => (
            <NoteReviewCard key={note.id} note={note} onAction={handleAction} approved />
          ))}
        </section>
      </div>
    </main>
  )
}

function NoteReviewCard({
  note,
  onAction,
  approved,
}: {
  note: AdminNote
  onAction: (id: string, action: 'approve' | 'reject') => void
  approved?: boolean
}) {
  const date = new Date(note.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })

  return (
    <div className={`mb-3 rounded-lg border overflow-hidden ${
      approved ? 'border-border bg-bg-raised/30' : 'border-warning/25 bg-warning/[0.03]'
    }`}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border flex-wrap">
        <span className="font-mono text-[0.65rem] text-text-dim">{note.topic_id}</span>
        <span className="text-text-muted">/</span>
        <span className="font-mono text-[0.7rem] text-text">{note.section_title}</span>
        <span className="ml-auto font-mono text-[0.6rem] text-text-muted">
          by {note.author_name} &middot; {date} &middot; v{note.correct_as_of}
        </span>
      </div>
      <div className="article-body px-4 py-2 text-[0.88rem] leading-[1.65] text-text">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 border-t border-border">
        {!approved && (
          <button
            onClick={() => onAction(note.id, 'approve')}
            className="px-3 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-bg-deep bg-success rounded transition-all cursor-pointer hover:bg-success/80"
          >
            Approve
          </button>
        )}
        <button
          onClick={() => onAction(note.id, 'reject')}
          className="px-3 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-danger border border-danger/30 rounded transition-all cursor-pointer hover:bg-danger/10"
        >
          {approved ? 'Remove' : 'Reject'}
        </button>
      </div>
    </div>
  )
}
