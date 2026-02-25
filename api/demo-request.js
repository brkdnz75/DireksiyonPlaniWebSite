import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true'
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER || 'noreply@direksiyonplani.com'
const MAIL_TO = process.env.MAIL_TO || 'direksiyonplani@gmail.com'

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const parseBody = (body) => {
  if (!body) return {}
  if (typeof body === 'object') return body
  if (typeof body !== 'string') return {}

  try {
    return JSON.parse(body)
  } catch {
    return {}
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ error: 'SMTP ayarlari eksik. Vercel env degiskenlerini kontrol edin.' })
  }

  const body = parseBody(req.body)
  const payload = {
    name: String(body.name || '').trim(),
    courseName: String(body.courseName || '').trim(),
    phone: String(body.phone || '').trim(),
    email: String(body.email || '').trim(),
    message: String(body.message || '').trim(),
    createdAt: new Date().toISOString(),
  }

  if (!payload.name || !payload.courseName || !payload.phone || !payload.email) {
    return res.status(400).json({ error: 'Ad, kurs adi, telefon ve e-posta alanlari zorunludur.' })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const safeMessage = payload.message || 'Belirtilmedi'
  const subject = `Yeni Demo Talebi - ${payload.courseName}`
  const text = [
    'Yeni demo talebi alindi.',
    '',
    `Ad Soyad: ${payload.name}`,
    `Kurs Adi: ${payload.courseName}`,
    `Telefon: ${payload.phone}`,
    `E-posta: ${payload.email}`,
    `Mesaj: ${safeMessage}`,
    `Tarih: ${payload.createdAt}`,
  ].join('\n')
  const html = `
    <h2>Yeni Demo Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Kurs Adi:</strong> ${escapeHtml(payload.courseName)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Mesaj:</strong> ${escapeHtml(safeMessage)}</p>
    <p><strong>Tarih:</strong> ${escapeHtml(payload.createdAt)}</p>
  `

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: MAIL_TO,
      replyTo: payload.email,
      subject,
      text,
      html,
    })

    return res.status(200).json({
      success: true,
      message: 'Demo talebiniz alindi.',
    })
  } catch (error) {
    console.error('Mail gonderim hatasi:', error)
    return res.status(502).json({ error: 'E-posta gonderimi basarisiz oldu.' })
  }
}
