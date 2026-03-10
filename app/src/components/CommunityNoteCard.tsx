import ReactMarkdown from 'react-markdown'
import type { CommunityNote } from '../types/notes'

export default function CommunityNoteCard({
  note,
  latestVersion,
}: {
  note: CommunityNote
  latestVersion: string
}) {
  const isStale = note.correct_as_of !== latestVersion

  return (
    <div className="community-note my-4 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.06] overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-1.5 border-b border-emerald-500/20 bg-emerald-500/[0.08] flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] px-2 py-0.5 rounded border text-text-muted bg-bg-raised border-border">
          v{note.correct_as_of}
        </span>
        <span className="font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-emerald-400">
          Community Note
        </span>
        <span className="font-mono text-[0.6rem] text-text-muted ml-auto">
          by {note.author_name}
        </span>
        {isStale && (
          <span className="font-mono text-[0.55rem] text-warning/70">
            may be outdated
          </span>
        )}
      </div>
      <div className="article-body px-4 py-2 text-[0.92rem] leading-[1.7] text-text">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </div>
  )
}
