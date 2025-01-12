import { randomBytes, scrypt } from 'node:crypto'
import { promisify } from 'node:util'
import { getDb } from './db.server'

const scryptAsync = promisify(scrypt)

interface User {
  id: number
  username: string
  password_hash: string
}

export async function createUser(username: string, password: string) {
  const db = await getDb()

  // Generate a salt and hash the password
  const salt = randomBytes(16).toString('hex')
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer
  const passwordHash = `${salt}:${derivedKey.toString('hex')}`

  const stmt = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)')

  try {
    const result = stmt.run(username, passwordHash)
    return result.lastInsertRowid
  } catch (error: any) {
    // SQLite constraint error
    if (error.message?.includes('UNIQUE constraint failed')) {
      throw new Error('Username already exists')
    }
    throw error
  }
}

export async function verifyLogin(username: string, password: string) {
  const db = await getDb()

  const stmt = db.prepare('SELECT * FROM users WHERE username = ?')
  const user = stmt.get(username) as User | undefined

  if (!user) return null

  const [salt, storedHash] = user.password_hash.split(':')
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer
  const passwordHash = derivedKey.toString('hex')

  if (passwordHash !== storedHash) return null

  return { id: user.id, username: user.username }
}

// Example of using prepared statements for user queries
export async function getUserById(id: number) {
  const db = await getDb()
  const stmt = db.prepare('SELECT id, username FROM users WHERE id = ?')

  return stmt.get(id) as { id: number; username: string } | undefined
}

// Example of using iteration for multiple results
export async function getAllUsers() {
  const db = await getDb()
  const stmt = db.prepare('SELECT id, username FROM users ORDER BY username')

  const users = stmt.all()

  return users
}
