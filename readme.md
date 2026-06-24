# مسجد بیت الحاکم — Masjid Bait ul Hakim

A responsive, single-page website for **Masjid Bait ul Hakim**, a mosque under active construction in Lahore, Pakistan. The site serves as a community hub for fundraising, construction progress tracking, service information, and visitor contact.

---

## 🕌 About the Masjid

Masjid Bait ul Hakim is being constructed at **Maraka Quarters, Multan Road, Lahore, Punjab, Pakistan**. The masjid is designed to accommodate up to **2,000 worshippers** and will serve the local Muslim community as a centre for Salah, Islamic education, and spiritual growth. The ground floor is already operational, with Quran classes running for children while construction of the upper floor continues.

**Fundraising Goal:** ₨5,00,00,000 (₨5 Crore)  
**Raised So Far:** ₨2,50,00,000 (50% reached) · 247 donors

---

## 🌐 Website Pages & Sections

This is a **single-page application** (`masjid-bait-ul-hakim.html`) with the following sections:

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Full-screen intro with masjid name, tagline, live fund stats, and CTA buttons |
| About | `#about` | Masjid description, key features, and imagery |
| Donate / Fund | `#fund` | Online donation form with fund progress tracker |
| Construction Gallery | `#progress` | Slideshow of 20 real construction photos with captions |
| Services | `#services` | Six masjid services offered to the community |
| Contact | `#contact` | Address, phone, email, office hours, map, and contact form |

---

## ✨ Features

### Frontend
- **Responsive design** — fully mobile-optimised with a hamburger menu, compact donation section, and adaptive layouts
- **Islamic aesthetic** — gold (`#c9a84c`) and green (`#1a5c3a`) colour palette; Amiri (Arabic) and Nunito fonts
- **Live fund tracker** — progress bar and stats update in real time as donations are submitted
- **20-photo slideshow** — auto-advances every 3.5 seconds with dot navigation, thumbnail strip, prev/next buttons, and slide captions showing real construction milestones (June 2026)
- **Donation flow** — amount selector (₨500 / ₨1,000 / ₨10,000 or custom), payment method selector, inline payment details, confirmation checkbox, receipt modal
- **Printable donation receipt** — receipt modal with Donation ID, donor name, amount, method, date/time; "Print / Save" opens a print window; WhatsApp button pre-fills a message to the masjid admin
- **Contact form** — sends to backend `/api/contact` endpoint with success/error feedback
- **Smooth scroll nav** — fixed navbar that darkens on scroll; links to all sections
- **Google Maps integration** — "Get Directions" button links to `maps.google.com` with masjid coordinates

### Backend (Node.js / Express)
- Serves the static HTML file
- **`POST /api/donate`** — logs donation (name, phone, amount, paymentMethod) to `db.json`; sends email notification via Gmail SMTP
- **`POST /api/contact`** — receives contact form submissions; sends email to masjid admin via Gmail SMTP
- Timezone-aware email formatting: Pakistan Standard Time (UTC+5)
- Environment-based configuration via `.env`

---

## 🗂 Project Structure

```
masjid/
├── masjid-bait-ul-hakim.html   # Main website (all HTML, CSS, JS in one file)
├── server.js                   # Express backend (donate & contact APIs)
├── prayer-times-data.js        # Prayer times data
├── db.json                     # Local JSON database for donations
├── package.json                # Node.js project config
├── package-lock.json
├── .env                        # Environment variables (not committed)
├── .gitignore
├── rename-photos.ps1           # PowerShell script to rename/organise photos
├── img1.jpeg – img11.jpeg      # Construction photos (JPEG)
├── img12.jfif – img20.jfif     # Construction photos (JFIF)
├── masjid_web_fit.jpg          # About section image
└── node_modules/               # Dependencies
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (no framework) |
| Fonts | Google Fonts — Amiri (Arabic), Nunito |
| Backend | Node.js + Express |
| Email | Gmail SMTP (via Nodemailer) |
| Database | Flat-file JSON (`db.json`) |
| Deployment | Railway (cloud hosting) |
| Dependencies | `express`, `dotenv`, `cors` |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v18+ recommended for Railway compatibility)
- A Gmail account with an **App Password** enabled

### Steps

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd masjid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create your `.env` file**
   ```env
   GMAIL_EMAIL=your_gmail@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   PORT=3000
   ```
   > To generate a Gmail App Password: Google Account → Security → 2-Step Verification → App Passwords

4. **Start the server**
   ```bash
   node server.js
   ```

5. Open `http://localhost:3000` in your browser.

---

## 🚀 Deployment (Railway)

The project is deployed on [Railway](https://railway.app). Railway reads the `PORT` environment variable automatically — make sure `server.js` uses `process.env.PORT`.

Steps:
1. Push your code to GitHub
2. Connect the repo to a new Railway project
3. Add `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` as environment variables in Railway's dashboard
4. Railway will auto-detect Node.js and run `npm start`

---

## 💳 Donation Payment Methods

The website supports the following payment channels:

| Method | Details |
|---|---|
| 📱 JazzCash | 0329-4361882 |
| 📱 EasyPaisa | 0322-9638760 |
| 🏦 Meezan Bank | Account Title: Mumtaz Ahmad Rana |
| | A/C No: 02090100786883 |
| | IBAN: PK09 MEZN 0002 0901 0078 6883 |
| 💵 Cash | Available at the masjid office |

After donating, the donor is prompted to send a payment screenshot via WhatsApp to **+92 321 4022560** for confirmation.

---

## 🏗 Construction Fund Breakdown

| Phase | Budget |
|---|---|
| Foundation & Structure | ₨1 Crore |
| Brickwork & Walls | ₨1 Crore |
| Roof & Dome | ₨1 Crore |
| Flooring & Tiling | ₨65 Lakh |
| Electrical & Plumbing | ₨45 Lakh |
| Interior & Furnishing | ₨90 Lakh |
| **Total** | **₨5 Crore** |

---

## 🕋 Masjid Services

1. **Five Daily Prayers** — Jamaat prayers held at the temporary prayer site daily. Full Fajr to Isha schedule.
2. **Quran Education** — Classes for children (ages 5–15) every evening after Maghrib.
3. **Nikah Services** — Ceremonies conducted by certified Islamic scholars. Prior appointment required.
4. **Islamic Lectures** — Weekly dars after Fajr and Isha. Monthly scholars' programmes.
5. **Community Support** — Zakat distribution, food assistance for needy families.
6. **Ramadan Programs** — Iftaar arrangements, Taraweeh, I'tikaf, and Laylat-ul-Qadr programmes.

---

## 📞 Contact Information

| | |
|---|---|
| **Address** | مسجد بیت الحاکم — Maraka Quarters, Multan Road, Lahore, Punjab, Pakistan |
| **Phone** | +92 321 4022560 |
| **Email** | ranamumtaz123go@gmail.com |
| **WhatsApp** | [wa.me/923214022560](https://wa.me/923214022560) |
| **Office Hours** | After Fajr – 9 AM & After Asr – 8 PM · Saturday & Sunday: After all prayers |
| **Google Maps** | [Maraka Quarters, Multan Road, Lahore](https://maps.google.com/?q=31.393578679545257,74.1537863509163) |

---

## 📜 Environment Variables

| Variable | Description |
|---|---|
| `GMAIL_EMAIL` | Gmail address used to send notification emails |
| `GMAIL_APP_PASSWORD` | 16-character Gmail App Password (not your regular password) |
| `PORT` | Server port (defaults to `3000`; Railway sets this automatically) |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🤲 Sadaqah Jariyah

> *"Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."*
> — Sahih al-Bukhari & Sahih Muslim

Every contribution to Masjid Bait ul Hakim is Sadaqah Jariyah — a continuing charity whose reward lasts long after we are gone. May Allah accept from all who gave.