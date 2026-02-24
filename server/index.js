import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3001
const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('CORS origin not allowed'))
  }
}))
app.use(express.json())

const db = new Database(path.join(__dirname, 'submissions.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    course_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT DEFAULT '',
    created_at TEXT NOT NULL
  )
`)

const insertStmt = db.prepare(`
  INSERT INTO submissions (name, course_name, phone, email, message, created_at)
  VALUES (@name, @courseName, @phone, @email, @message, @createdAt)
`)

const selectAllStmt = db.prepare(`
  SELECT id, name, course_name AS courseName, phone, email, message, created_at AS createdAt
  FROM submissions
  ORDER BY created_at DESC
`)

const selectByIdStmt = db.prepare(`
  SELECT id, name, course_name AS courseName, phone, email, message, created_at AS createdAt
  FROM submissions
  WHERE id = ?
`)

app.post('/api/demo-request', (req, res) => {
  const { name, courseName, phone, email, message } = req.body

  if (!name || !courseName || !phone || !email) {
    return res.status(400).json({ error: 'Ad, kurs adı, telefon ve e-posta alanları zorunludur.' })
  }

  const result = insertStmt.run({
    name,
    courseName,
    phone,
    email,
    message: message || '',
    createdAt: new Date().toISOString()
  })

  const created = selectByIdStmt.get(result.lastInsertRowid)
  console.log('Yeni demo talebi kaydedildi (id=%d):', created.id, created)

  return res.status(201).json({ success: true, message: 'Demo talebiniz alındı.', data: created })
})

app.get('/api/demo-requests', (_req, res) => {
  const rows = selectAllStmt.all()
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`Backend sunucu çalışıyor: http://localhost:${PORT}`)
  console.log(`Veritabanı: ${path.join(__dirname, 'submissions.db')}`)
})
