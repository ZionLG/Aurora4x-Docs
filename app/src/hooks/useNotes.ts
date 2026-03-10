import { useState, useEffect, useCallback, useRef } from 'react'
import type { CommunityNote } from '../types/notes'

const cache = new Map<string, CommunityNote[]>()

export function useNotes(topicId: string | null) {
  const [notes, setNotes] = useState<CommunityNote[]>([])
  const [loading, setLoading] = useState(false)
  const currentTopicRef = useRef(topicId)

  const fetchNotes = useCallback(async (id: string) => {
    if (cache.has(id)) {
      setNotes(cache.get(id)!)
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/notes?topicId=${encodeURIComponent(id)}`)
      if (!res.ok) throw new Error()
      const data: CommunityNote[] = await res.json()
      cache.set(id, data)
      if (currentTopicRef.current === id) setNotes(data)
    } catch {
      if (currentTopicRef.current === id) setNotes([])
    } finally {
      if (currentTopicRef.current === id) setLoading(false)
    }
  }, [])

  useEffect(() => {
    currentTopicRef.current = topicId
    if (!topicId) {
      setNotes([])
      return
    }
    fetchNotes(topicId)
  }, [topicId, fetchNotes])

  const submitNote = useCallback(async (note: {
    topic_id: string
    section_title: string
    author_name: string
    content: string
    correct_as_of: string
  }) => {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'Failed to submit note')
    }
    // Invalidate cache so next visit refetches
    cache.delete(note.topic_id)
  }, [])

  const notesBySection = new Map<string, CommunityNote[]>()
  for (const note of notes) {
    const list = notesBySection.get(note.section_title) || []
    list.push(note)
    notesBySection.set(note.section_title, list)
  }

  return { notes, notesBySection, loading, submitNote }
}
