import { useState } from 'react'
import type { VersionInfo } from '../manifest'

interface Props {
  topicId: string
  sectionTitle: string
  versions: VersionInfo[]
  onSubmit: (note: {
    topic_id: string
    section_title: string
    author_name: string
    content: string
    correct_as_of: string
  }) => Promise<void>
}

export default function AddNoteForm({ topicId, sectionTitle, versions, onSubmit }: Props) {
  const [open, setOpen] = useState(false)
  const [author, setAuthor] = useState(() => localStorage.getItem('aurora-note-author') || '')
  const [content, setContent] = useState('')
  const [version, setVersion] = useState(versions.find(v => !v.unreleased)?.version || versions[0]?.version || '')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const releasedVersions = versions.filter(v => !v.unreleased)

  const handleSubmit = async () => {
    if (!author.trim() || !content.trim() || !version) return
    setSubmitting(true)
    setError('')
    try {
      localStorage.setItem('aurora-note-author', author.trim())
      await onSubmit({
        topic_id: topicId,
        section_title: sectionTitle,
        author_name: author.trim(),
        content: content.trim(),
        correct_as_of: version,
      })
      setSubmitted(true)
      setContent('')
      setTimeout(() => {
        setSubmitted(false)
        setOpen(false)
      }, 2500)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to submit')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 mt-1 mb-2 px-3 py-1.5 font-mono text-[0.65rem] text-text-muted hover:text-emerald-400 border border-dashed border-border hover:border-emerald-500/40 rounded-md transition-colors cursor-pointer"
      >
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        Add a note
      </button>
    )
  }

  if (submitted) {
    return (
      <div className="my-3 px-4 py-3 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-400 font-mono text-[0.75rem]">
        Note submitted! It will appear after review.
      </div>
    )
  }

  return (
    <div className="my-3 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.03] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-emerald-500/15 bg-emerald-500/[0.05]">
        <span className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-emerald-400">
          Add Community Note
        </span>
        <button
          onClick={() => setOpen(false)}
          className="ml-auto font-mono text-[0.75rem] text-text-muted hover:text-text cursor-pointer px-1"
        >
          &times;
        </button>
      </div>
      <div className="px-4 py-3 space-y-3">
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[140px]">
            <label className="font-mono text-[0.62rem] text-text-muted uppercase tracking-[0.08em] block mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              maxLength={50}
              className="w-full py-2 px-3 font-mono text-[0.8rem] text-text bg-bg-raised border border-border rounded-md outline-none transition-all focus:border-emerald-500/50 focus:shadow-[0_0_0_2px_rgba(52,211,153,0.1)] placeholder:text-text-muted"
            />
          </div>
          <div className="w-36">
            <label className="font-mono text-[0.62rem] text-text-muted uppercase tracking-[0.08em] block mb-1">
              Correct as of
            </label>
            <select
              value={version}
              onChange={e => setVersion(e.target.value)}
              className="w-full py-2 px-3 font-mono text-[0.8rem] text-text bg-bg-raised border border-border rounded-md outline-none transition-all focus:border-emerald-500/50 cursor-pointer"
            >
              {releasedVersions.map(v => (
                <option key={v.version} value={v.version}>v{v.version}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="font-mono text-[0.62rem] text-text-muted uppercase tracking-[0.08em] block mb-1">
            Note (markdown supported)
          </label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            maxLength={5000}
            rows={4}
            placeholder="Share a tip, clarification, or additional context..."
            className="w-full py-2 px-3 font-body text-[0.85rem] text-text bg-bg-raised border border-border rounded-md outline-none transition-all focus:border-emerald-500/50 focus:shadow-[0_0_0_2px_rgba(52,211,153,0.1)] placeholder:text-text-muted resize-y min-h-[80px]"
          />
          <div className="text-right font-mono text-[0.58rem] text-text-muted mt-0.5">
            {content.length}/5000
          </div>
        </div>
        {error && (
          <div className="font-mono text-[0.72rem] text-danger">{error}</div>
        )}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            disabled={submitting || !author.trim() || !content.trim()}
            className="px-4 py-1.5 font-mono text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-bg-deep bg-emerald-400 rounded-md transition-all cursor-pointer hover:bg-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Submit Note'}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1.5 font-mono text-[0.72rem] text-text-muted hover:text-text transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <span className="ml-auto font-mono text-[0.58rem] text-text-muted">
            Notes appear after review
          </span>
        </div>
      </div>
    </div>
  )
}
