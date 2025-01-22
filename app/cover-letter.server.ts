import type { DatabaseSync } from 'node:sqlite'
import { getDb } from './db.server'

interface CoverLetter {
  id: number
  user_id: number
  title: string
  content: string
  created_at: string
  updated_at: string
}

export async function getCoverLetters(userId: number) {
  const db: DatabaseSync = await getDb()
  return db
    .prepare('SELECT * FROM cover_letter WHERE user_id = ? ORDER BY created_at DESC')
    .all(userId) as CoverLetter[]
}

export async function getCoverLetter(id: number, userId: number) {
  const db: DatabaseSync = await getDb()
  return db.prepare('SELECT * FROM cover_letter WHERE id = ? AND user_id = ?').get(id, userId) as
    | CoverLetter
    | undefined
}
