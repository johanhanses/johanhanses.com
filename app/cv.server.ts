import type { DatabaseSync } from 'node:sqlite'
import { getDb } from './db.server'

interface CV {
  id: number
  content: string
  created_at: string
  updated_at: string
}

export async function getCv() {
  const db: DatabaseSync = await getDb()
  const cv = db.prepare('SELECT * FROM cv ORDER BY created_at DESC LIMIT 1').get() as CV | undefined

  if (!cv) return null

  return {
    ...cv,
    content: JSON.parse(cv.content),
  }
}
