# مسجد بیت الحاکم — Masjid Bait ul Hakim
### Official Website — Construction, Donation & Community Portal

---

## 📁 Project Structure

```
masjid-bait-ul-hakim/
│
├── masjid-bait-ul-hakim.html   ← Frontend (complete website)
├── server.js                    ← Backend (Node.js + Express API)
├── db.json                      ← Database (auto-created on first run)
├── package.json                 ← Dependencies & scripts
└── README.md                    ← This file
```

---

## ⚡ Quick Start

### 1. Install Node.js
Download from: https://nodejs.org (v14 or higher)

### 2. Create project folder
```bash
mkdir masjid-bait-ul-hakim
cd masjid-bait-ul-hakim
```

### 3. Place all files in the folder
```
masjid-bait-ul-hakim.html
server.js
db.json
package.json
README.md
```

### 4. Install dependencies
```bash
npm install
```

### 5. Start the server
```bash
# Production
npm start

# Development (auto-reload)
npm run dev
```

### 6. Open in browser
```
http://localhost:3000
```

---

## 🌐 Website Sections

| Section | Description |
|---|---|
| **Hero** | Masjid name in Urdu/Arabic, fund stats, CTA buttons |
| **About** | Masjid overview, capacity, features |
| **Fund Collection** | Live donation form, progress bar, cost breakdown |
| **Construction Gallery** | Phase-filtered photo gallery with lightbox |
| **Timeline** | Construction milestones from 2023 to inauguration |
| **Prayer Times** | All 6 daily prayers with iqama times |
| **Services** | Quran classes, nikah, lectures, community welfare |
| **Contact & Map** | Google Maps link, contact form, address & phone |
| **Footer** | Bank details, quick links, social media |

---

## 📡 API Reference

### Base URL
```
http://localhost:3000/api
```

---

### 📊 Fund Stats

**GET** `/api/stats`
```json
// Response
{
  "success": true,
  "data": {
    "totalGoal": 8500000,
    "totalRaised": 5780000,
    "totalDonors": 247,
    "percent": 68,
    "remaining": 2720000,
    "lastUpdated": "2024-05-15T10:30:00.000Z"
  }
}
```

---

### 💰 Donations

**POST** `/api/donate`
```json
// Request Body
{
  "name": "Ahmed Khan",
  "phone": "0300-1234567",
  "amount": 5000,
  "paymentMethod": "easypaisa"
}

// Response
{
  "success": true,
  "message": "JazakAllah Khair! Donation recorded successfully.",
  "donationId": "DON-1700000001",
  "newTotal": 5785000,
  "newDonors": 248
}
```

**GET** `/api/donations?page=1&limit=20`
```json
// Response
{
  "success": true,
  "total": 247,
  "page": 1,
  "data": [ ...donations ]
}
```

**PATCH** `/api/donations/:id`
```json
// Request Body
{ "status": "confirmed" }
// status options: "pending" | "confirmed" | "rejected"
```

---

### ✉️ Contact Messages

**POST** `/api/contact`
```json
// Request Body
{
  "name": "Sara Ahmed",
  "email": "sara@example.com",
  "phone": "0321-0000000",
  "subject": "Quran Classes",
  "message": "I want to enroll my child."
}
```

**GET** `/api/contacts?unread=true`
```json
// Response
{
  "success": true,
  "total": 2,
  "data": [ ...messages ]
}
```

---

### 🕌 Prayer Times

**GET** `/api/prayer-times`
```json
// Response
{
  "success": true,
  "data": {
    "fajr":    { "adhan": "04:22", "iqama": "04:40" },
    "zuhr":    { "adhan": "12:10", "iqama": "12:30" },
    "asr":     { "adhan": "16:05", "iqama": "16:20" },
    "maghrib": { "adhan": "19:18", "iqama": "19:18" },
    "isha":    { "adhan": "20:48", "iqama": "21:00" },
    "jumuah":  { "adhan": "13:00", "iqama": "13:15" }
  }
}
```

**PUT** `/api/prayer-times`
```json
// Request Body (update any prayer)
{
  "fajr": { "adhan": "04:15", "iqama": "04:35" }
}
```

---

### 🖼️ Gallery

**GET** `/api/gallery?phase=phase1`
```
phase options: phase1 | phase2 | phase3 | (omit for all)
```

**POST** `/api/gallery`
```json
// Request Body
{
  "title": "Dome Construction Begins",
  "description": "Central dome framework started.",
  "phase": "phase3",
  "imageUrl": "/images/dome-day1.jpg",
  "date": "2024-06-01"
}
```

**DELETE** `/api/gallery/:id`

---

## 🏦 Bank & Payment Details

Update these in `db.json` under `bankDetails`:

| Method | Details |
|---|---|
| **HBL Bank** | A/C: 0001-0000000-00 |
| **IBAN** | PK00HABB0001000000000 |
| **EasyPaisa** | 0300-0000000 |
| **JazzCash** | 0300-0000000 |

---

## 🔧 Customization Guide

### Update Masjid Info
Edit `db.json` → `masjid` section:
```json
"masjid": {
  "name": "مسجد بیت الحاکم",
  "totalGoal": 8500000,
  "totalRaised": 5780000
}
```

### Update Prayer Times
Edit `db.json` → `prayerTimes` section or use the PUT API.

### Add Real Photos
In `db.json` → `gallery`, set `imageUrl` to your image path:
```json
"imageUrl": "/images/construction-phase1.jpg"
```
Place images in an `/images/` folder alongside `server.js`.

### Connect Real Google Map
In `masjid-bait-ul-hakim.html`, find the map section and replace with:
```html
<iframe
  src="https://maps.google.com/maps?q=YOUR+ADDRESS&output=embed"
  width="100%" height="360" style="border:0" allowfullscreen>
</iframe>
```

---

## 🚀 Deployment (Free Hosting)

### Option 1 — Railway (Recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option 2 — Render.com
1. Push code to GitHub
2. Go to render.com → New Web Service
3. Connect your GitHub repo
4. Set Start Command: `node server.js`
5. Deploy — free tier available

### Option 3 — VPS (cPanel / Hostinger)
```bash
# Upload files via FTP or File Manager
# Then in terminal:
npm install
npm start

# Use PM2 to keep it running:
npm install -g pm2
pm2 start server.js --name masjid
pm2 save
pm2 startup
```

---

## 📱 Features Summary

- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Urdu/Arabic typography (Amiri font)
- ✅ Live donation form with progress bar
- ✅ Construction gallery with phase filters & lightbox
- ✅ Prayer times with active prayer highlight
- ✅ Construction timeline (2023 → 2025)
- ✅ Cost breakdown per phase
- ✅ Contact form with backend storage
- ✅ Google Maps integration
- ✅ REST API for all features
- ✅ JSON file database (no setup needed)
- ✅ Sticky donate button
- ✅ Mobile hamburger menu

---

## 🤲 May Allah Accept This Project as Sadaqah Jariyah

*"Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."*
*(Sahih Bukhari & Muslim)*

---

**Built for:** مسجد بیت الحاکم — Lahore, Pakistan  
**Stack:** HTML · CSS · JavaScript · Node.js · Express