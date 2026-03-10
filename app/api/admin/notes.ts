import { neon } from '@neondatabase/serverless'
import type { VercelRequest, VercelResponse } from '@vercel/node'

function getDb() {
  return neon(process.env.DATABASE_URL!)
}

function checkAuth(req: VercelRequest): boolean {
  const token = req.headers.authorization?.replace('Bearer ', '')
  return token === process.env.ADMIN_SECRET
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const sql = getDb()

  // GET /api/admin/notes — list all notes
  if (req.method === 'GET') {
    const rows = await sql`
      SELECT id, topic_id, section_title, author_name, content, correct_as_of, created_at, approved
      FROM community_notes
      ORDER BY approved ASC, created_at DESC
    `
    return res.status(200).json(rows)
  }

  // PATCH /api/admin/notes — approve or reject
  if (req.method === 'PATCH') {
    const { id, action } = req.body

    if (!id || !action) {
      return res.status(400).json({ error: 'id and action are required' })
    }

    if (action === 'approve') {
      await sql`UPDATE community_notes SET approved = true WHERE id = ${id}`
      return res.status(200).json({ ok: true })
    }

    if (action === 'reject') {
      await sql`DELETE FROM community_notes WHERE id = ${id}`
      return res.status(200).json({ ok: true })
    }

    return res.status(400).json({ error: 'action must be "approve" or "reject"' })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
