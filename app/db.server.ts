import { constants } from 'node:fs'
import { access, mkdir } from 'node:fs/promises'
import { DatabaseSync } from 'node:sqlite'

let db: DatabaseSync

async function ensureDbDirectory() {
  const dbPath = './data'
  const dbFile = './data/sqlite.db'

  try {
    // Create directory if it doesn't exist
    await mkdir(dbPath, { recursive: true })

    // Test write permissions
    try {
      await access(dbPath, constants.W_OK)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch {
      // eslint-disable-next-line no-console
      console.error(`No write permission to ${dbPath}`)
      throw new Error(`Database directory ${dbPath} is not writable`)
    }

    // If db file exists, check if it's writable
    try {
      await access(dbFile, constants.F_OK)
      await access(dbFile, constants.W_OK)
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code !== 'ENOENT') {
        // eslint-disable-next-line no-console
        console.error(`No write permission to ${dbFile}`)
        throw new Error(`Database file ${dbFile} is not writable`)
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Database initialization error:', error)
    throw error
  }
}

async function initDb() {
  if (db) return db

  await ensureDbDirectory()

  db = new DatabaseSync('./data/sqlite.db', {
    enableForeignKeyConstraints: true,
  })

  // Create tables if they don't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    ) STRICT;

    CREATE TABLE IF NOT EXISTS cover_letter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) STRICT;

    CREATE TABLE IF NOT EXISTS cv (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL, -- Store JSON as TEXT
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    ) STRICT;
  `)

  return db
}

export async function getDb() {
  if (!db) {
    db = await initDb()
    // eslint-disable-next-line no-console
    console.log('Database initialized')
  }
  return db
}
