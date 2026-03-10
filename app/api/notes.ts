import { neon } from '@neondatabase/serverless'
import type { VercelRequest, VercelResponse } from '@vercel/node'

function getDb() {
  return neon(process.env.DATABASE_URL!)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = getDb()

  // GET /api/notes?topicId=engines
  if (req.method === 'GET') {
    const { topicId } = req.query
    if (!topicId || typeof topicId !== 'string') {
      return res.status(400).json({ error: 'topicId is required' })
    }

    const rows = await sql`
      SELECT id, topic_id, section_title, author_name, content, correct_as_of, created_at
      FROM community_notes
      WHERE topic_id = ${topicId} AND approved = true
      ORDER BY created_at DESC
    `
    return res.status(200).json(rows)
  }

  // POST /api/notes
  if (req.method === 'POST') {
    const { topic_id, section_title, author_name, content, correct_as_of } = req.body

    if (!topic_id || !section_title || !author_name || !content || !correct_as_of) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (author_name.length > 50) {
      return res.status(400).json({ error: 'Author name too long' })
    }
    if (content.length > 5000) {
      return res.status(400).json({ error: 'Note content too long (max 5000 characters)' })
    }

    await sql`
      INSERT INTO community_notes (topic_id, section_title, author_name, content, correct_as_of)
      VALUES (${topic_id}, ${section_title}, ${author_name}, ${content}, ${correct_as_of})
    `
    return res.status(201).json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
