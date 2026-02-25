# DireksiyonPlani

Direksiyon kurslari icin tanitim sitesi + demo talep formu.

## Mimari

- Frontend: React + Vite (SPA), build cikti klasoru `dist/`
- Backend: Express (`server/index.js`)
- Veritabani: SQLite (`server/submissions.db`)
- Mail: Nodemailer (SMTP)

## Gereksinimler

- Node.js 18 veya ustu
- npm
- SMTP hesabi (Gmail veya baska saglayici)

## Lokal Gelistirme

1. Paketleri kur:

```bash
npm install
```

2. Frontend dev server:

```bash
npm run dev
```

3. Backend API (ayri terminal):

```bash
npm run server
```

Frontend varsayilan olarak `http://localhost:5173`, backend `http://localhost:3001` uzerinde calisir.

## Ortam Degiskenleri

Ornekler icin `.env.example` dosyasini kullan.

Zorunlu backend degiskenleri:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`

Opsiyonel:

- `SMTP_FROM`
- `CORS_ORIGINS` (virgulle ayrilmis liste)
- `VITE_API_BASE_URL` (frontend build aninda kullanilir)

## Production Build

```bash
npm run build
```

Build ciktilari `dist/` klasorune yazilir.

## Vercel Disi Hostingde Yayin (Onerilen)

Bu proje `BrowserRouter` kullandigi icin SPA rewrite zorunludur.

1. Sunucuya kodu kopyala.
2. Env degiskenlerini tanimla.
3. Build al:

```bash
npm ci
npm run build
```

4. Backend'i calistir:

```bash
node server/index.js
```

5. Process manager kullan (PM2/systemd tavsiye edilir).
6. Web server (Nginx/Apache) ile:
- Statik dosyalari `dist/` altindan servis et
- Tum route'lari `index.html`e rewrite et
- `/api/*` isteklerini backend'e proxy et (`localhost:3001`)

### Nginx Ornek Konfig

```nginx
server {
  listen 80;
  server_name example.com www.example.com;

  root /var/www/direksiyonplani/dist;
  index index.html;

  location /api/ {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Not: API ayni domainde `/api` altinda proxy edilirse `VITE_API_BASE_URL` bos birakilabilir.
API farkli domaindeyse build almadan once `VITE_API_BASE_URL` o API domainine set edilmelidir.

## Domain ve DNS Checklist

- Domain A kaydi sunucu IP'sine yonlenmis mi?
- SSL sertifikasi aktif mi? (Let's Encrypt vb.)
- `https://domain.com` aciliyor mu?
- `https://domain.com/contact` dogrudan aciliyor mu? (SPA rewrite testi)
- Form gonderimi calisiyor mu? (`/api/demo-request`)
- SMTP ile mail gercekten dusuyor mu?

## Veri ve Guvenlik Notlari

- `server/submissions.db` dosyasi icin yazma izni olmalidir.
- Bu dosya icin duzenli yedek alin.
- `.env.local` ve tum gizli anahtarlar repoya gonderilmemelidir.
- Vercel'e ait token/secrets baska ortama tasinmamalidir.

## Handover Checklist 

- Projeyi clone etti
- Env degiskenlerini girdi
- `npm ci && npm run build` sorunsuz
- Backend process manager ile ayakta
- Web server rewrite/proxy tamam
- Domain + SSL tamam
- Form ve mail testi tamam