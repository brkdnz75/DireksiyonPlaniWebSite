import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3001

const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true'
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER || 'noreply@direksiyonplani.com'
const MAIL_TO = process.env.MAIL_TO || 'direksiyonplani@gmail.com'

const smtpConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS)
const mailTransporter = smtpConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })
  : null

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }
      callback(new Error('CORS origin not allowed'))
    },
  })
)

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

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const buildMailContent = ({ name, courseName, phone, email, message, createdAt }) => {
  const safeMessage = message?.trim() || 'Belirtilmedi'
  const subject = `Yeni Demo Talebi - ${courseName}`

  const text = [
    'Yeni demo talebi alindi.',
    '',
    `Ad Soyad: ${name}`,
    `Kurs Adi: ${courseName}`,
    `Telefon: ${phone}`,
    `E-posta: ${email}`,
    `Mesaj: ${safeMessage}`,
    `Tarih: ${createdAt}`,
  ].join('\n')

  const html = `
    <h2>Yeni Demo Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
    <p><strong>Kurs Adi:</strong> ${escapeHtml(courseName)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Mesaj:</strong> ${escapeHtml(safeMessage)}</p>
    <p><strong>Tarih:</strong> ${escapeHtml(createdAt)}</p>
  `

  return { subject, text, html }
}

app.post('/api/demo-request', async (req, res) => {
  const { name, courseName, phone, email, message } = req.body ?? {}

  if (!name || !courseName || !phone || !email) {
    return res.status(400).json({ error: 'Ad, kurs adi, telefon ve e-posta alanlari zorunludur.' })
  }

  if (!mailTransporter) {
    return res.status(500).json({ error: 'Mail sunucusu ayarlanmamis. SMTP bilgilerini tanimlayin.' })
  }

  const payload = {
    name: String(name).trim(),
    courseName: String(courseName).trim(),
    phone: String(phone).trim(),
    email: String(email).trim(),
    message: String(message || '').trim(),
    createdAt: new Date().toISOString(),
  }

  const result = insertStmt.run(payload)
  const created = selectByIdStmt.get(result.lastInsertRowid)

  try {
    const { subject, text, html } = buildMailContent(payload)
    await mailTransporter.sendMail({
      from: SMTP_FROM,
      to: MAIL_TO,
      replyTo: payload.email,
      subject,
      text,
      html,
    })
  } catch (mailError) {
    console.error('Demo talebi kaydedildi ama e-posta gonderilemedi:', mailError)
    return res.status(502).json({ error: 'Talep kaydedildi ancak e-posta gonderimi basarisiz oldu.' })
  }

  console.log('Yeni demo talebi kaydedildi (id=%d):', created.id, created)
  return res.status(201).json({ success: true, message: 'Demo talebiniz alindi.', data: created })
})

app.get('/api/demo-requests', (_req, res) => {
  const rows = selectAllStmt.all()
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`Backend server started: http://localhost:${PORT}`)
  console.log(`Database: ${path.join(__dirname, 'submissions.db')}`)
  if (!smtpConfigured) {
    console.log('WARNING: SMTP vars are missing. Form cannot send emails until configured.')
  }
})
