const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const https = require('https'); // built-in Node.js — no install needed
const PRAYER_CALENDAR = require('./prayer-times-data'); // full year timetable

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

// ══════════════════════════════════════════
//  EMAIL CONFIGURATION — EDIT THIS SECTION
// ══════════════════════════════════════════
const EMAIL_CONFIG = {
  yourEmail:   'ranamumtaz123go@gmail.com', // ← receives all alerts
  fromEmail:   'ranamumtaz123go@gmail.com', // ← must be verified in Brevo sender list
  replyTo:     'ranamumtaz123go@gmail.com', // ← replies go here
  fromName:    'Masjid Bait ul Hakeem',
  brevoApiKey: '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',
};
// ══════════════════════════════════════════

// ── Middleware ──
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ── Serve homepage ──
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'masjid-bait-ul-hakim.html'));
});

// ── Init DB ──
function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    const defaultData = {
      masjid: {
        name: "مسجد بیت الحاکم",
        nameEnglish: "Masjid Bait ul Hakeem",
        totalGoal: 8500000,
        totalRaised: 5780000,
        totalDonors: 247,
        lastUpdated: new Date().toISOString()
      },
      donations: [],
      contacts: [],
      gallery: [],
      prayerTimes: {
        fajr:    { adhan: "04:22", iqama: "04:40" },
        zuhr:    { adhan: "12:10", iqama: "12:30" },
        asr:     { adhan: "16:05", iqama: "16:20" },
        maghrib: { adhan: "19:18", iqama: "19:18" },
        isha:    { adhan: "20:48", iqama: "21:00" },
        jumuah:  { adhan: "13:00", iqama: "13:15" }
      }
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2));
    console.log('✅ Database initialized (db.json)');
  }
}

function readDB() { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
function writeDB(data) { fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2)); }

initDB();

// ══════════════════════════════════════════
//  BREVO HTTP API — works on port 443
//  No SMTP, no firewall issues
// ══════════════════════════════════════════

function fmtPKR(n) {
  return 'Rs.' + Number(n).toLocaleString('en-PK');
}

const methodDetails = {
  easypaisa: { icon: '[EasyPaisa]', label: 'EasyPaisa',    color: '#C2185B' },
  jazzcash:  { icon: '[JazzCash]',  label: 'JazzCash',     color: '#F57C00' },
  bank:      { icon: '[Bank]',      label: 'Bank Transfer', color: '#0D6EFD' },
  cash:      { icon: '[Cash]',      label: 'Cash',          color: '#1a5c3a' },
};

// ── Core Brevo API sender (uses HTTPS port 443) ──
function sendBrevoEmail(toEmail, toName, subject, htmlContent) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      sender: {
        name: EMAIL_CONFIG.fromName,
        email: EMAIL_CONFIG.fromEmail
      },
      to: [{ email: toEmail, name: toName }],
      replyTo: { email: EMAIL_CONFIG.replyTo },
      subject: subject,
      htmlContent: htmlContent
    });

    const options = {
      hostname: 'api.brevo.com',
      port: 443,
      path: '/v3/smtp/email',
      method: 'POST',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
        'api-key':      EMAIL_CONFIG.brevoApiKey,
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`📧 Brevo response [${res.statusCode}]:`, data);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`Brevo API error ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Donation Alert to Admin ──
async function sendDonationAlert(donation, stats) {
  const method = methodDetails[donation.paymentMethod] || { label: donation.paymentMethod };
  const percent = Math.round((stats.totalRaised / stats.totalGoal) * 100);
  const progressWidth = Math.min(percent, 100);

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif">
  <div style="max-width:580px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:linear-gradient(135deg,#1a5c3a,#2d8a57);padding:28px 32px;text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🕌</div>
      <div style="font-size:22px;color:#f0d080;margin-bottom:4px">Masjid Bait ul Hakeem</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.7);letter-spacing:2px;text-transform:uppercase">New Donation Received</div>
    </div>
    <div style="background:#e8f5ee;padding:14px 32px;text-align:center;border-bottom:1px solid #d4edda">
      <span style="background:#1a5c3a;color:#fff;padding:6px 18px;border-radius:20px;font-size:13px;font-weight:700">
        New Donation Alert
      </span>
    </div>
    <div style="padding:28px 32px">
      <h2 style="font-size:16px;color:#1a1a1a;margin-bottom:20px;font-weight:700">Donation Details</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;width:40%">Donor Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:700">${donation.name || 'Anonymous'}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:700">${donation.phone || 'Not provided'}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px">Amount</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:20px;font-weight:800;color:#1a5c3a">${fmtPKR(donation.amount)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px">Payment Method</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:700">${method.label}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px">Donation ID</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-family:monospace;color:#999">${donation.id}</td></tr>
        <tr><td style="padding:10px 0;color:#666;font-size:14px">Date & Time</td><td style="padding:10px 0;font-size:14px;font-weight:600">${new Date(donation.createdAt).toLocaleString('en-PK', {dateStyle:'full', timeStyle:'short'})}</td></tr>
      </table>
    </div>
    <div style="background:#f8f9fa;padding:24px 32px;border-top:1px solid #f0f0f0">
      <h3 style="font-size:14px;font-weight:700;color:#1a5c3a;margin-bottom:12px">Fund Progress</h3>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:6px">
        <span>Raised: <strong style="color:#1a5c3a">${fmtPKR(stats.totalRaised)}</strong></span>
        <span>Goal: <strong>${fmtPKR(stats.totalGoal)}</strong></span>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:8px">
        <tr>
          <td style="background:#1a5c3a;width:${progressWidth}%;height:14px;border-radius:7px 0 0 7px"></td>
          <td style="background:#e9ecef;width:${100 - progressWidth}%;height:14px;border-radius:0 7px 7px 0"></td>
        </tr>
      </table>
      <div style="font-size:12px;color:#666;text-align:right"><strong style="color:#1a5c3a">${percent}% reached</strong> &middot; ${stats.totalDonors} total donors</div>
    </div>
    <div style="padding:20px 32px;text-align:center;border-top:1px solid #f0f0f0">
      <a href="http://localhost:3000/admin.html" style="background:#1a5c3a;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;display:inline-block">Open Admin Panel</a>
    </div>
    <div style="background:#1a5c3a;padding:16px 32px;text-align:center">
      <div style="font-size:14px;color:#f0d080">Masjid Bait ul Hakeem &mdash; Lahore</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:4px">Automated donation alert</div>
    </div>
  </div>
</body>
</html>`;

  await sendBrevoEmail(
    EMAIL_CONFIG.yourEmail,
    'Masjid Admin',
    `New Donation: ${fmtPKR(donation.amount)} from ${donation.name || 'Anonymous'} via ${method.label}`,
    html
  );
  console.log(`📧 Donation alert sent to ${EMAIL_CONFIG.yourEmail}`);
}

// ── Contact Alert to Admin ──
async function sendContactAlert(contact) {
  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif">
  <div style="max-width:540px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:linear-gradient(135deg,#1a5c3a,#2d8a57);padding:24px 32px">
      <div style="font-size:20px;color:#f0d080;margin-bottom:4px">Masjid Bait ul Hakeem</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.7);letter-spacing:1.5px;text-transform:uppercase">New Contact Message</div>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;font-size:14px;width:35%;border-bottom:1px solid #f0f0f0">Name</td><td style="padding:8px 0;font-weight:700;font-size:14px;border-bottom:1px solid #f0f0f0">${contact.name}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:14px;border-bottom:1px solid #f0f0f0">Email</td><td style="padding:8px 0;font-size:14px;border-bottom:1px solid #f0f0f0"><a href="mailto:${contact.email}" style="color:#1a5c3a">${contact.email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:14px;border-bottom:1px solid #f0f0f0">Phone</td><td style="padding:8px 0;font-size:14px;border-bottom:1px solid #f0f0f0">${contact.phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:14px;border-bottom:1px solid #f0f0f0">Subject</td><td style="padding:8px 0;font-size:14px;font-weight:700;border-bottom:1px solid #f0f0f0">${contact.subject || 'General'}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:14px">Date</td><td style="padding:8px 0;font-size:14px">${new Date(contact.createdAt).toLocaleString('en-PK')}</td></tr>
      </table>
      <div style="margin-top:20px">
        <div style="font-size:13px;font-weight:700;color:#1a5c3a;margin-bottom:8px">Message:</div>
        <div style="background:#f8f9fa;padding:16px;border-radius:8px;font-size:14px;color:#333;line-height:1.6;border-left:4px solid #1a5c3a">${contact.message}</div>
      </div>
      <div style="margin-top:20px;text-align:center">
        <a href="mailto:${contact.email}" style="background:#1a5c3a;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;display:inline-block">Reply to ${contact.name}</a>
      </div>
    </div>
    <div style="background:#1a5c3a;padding:14px 32px;text-align:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.5)">Contact form alert &mdash; Masjid Bait ul Hakeem, Lahore</div>
    </div>
  </div>
</body>
</html>`;

  await sendBrevoEmail(
    EMAIL_CONFIG.yourEmail,
    'Masjid Admin',
    `New Message from ${contact.name}: ${contact.subject || 'General Inquiry'}`,
    html
  );
  console.log(`📧 Contact alert sent to ${EMAIL_CONFIG.yourEmail}`);
}

// ── Donor Confirmation Email ──
async function sendDonorConfirmation(donation) {
  if (!donation.email) return;
  const method = methodDetails[donation.paymentMethod] || { label: donation.paymentMethod };

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:linear-gradient(135deg,#1a5c3a,#2d8a57);padding:28px 32px;text-align:center">
      <div style="font-size:36px">🤲</div>
      <div style="font-size:22px;color:#f0d080;margin:8px 0">JazakAllah Khair!</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.8)">Your donation to Masjid Bait ul Hakeem has been received</div>
    </div>
    <div style="padding:28px 32px">
      <p style="font-size:14px;color:#333;line-height:1.7;margin-bottom:20px">Assalamu Alaikum <strong>${donation.name}</strong>,<br>We are grateful for your generous contribution. May Allah reward you abundantly and accept this as Sadaqah Jariyah.</p>
      <div style="background:#f8f9fa;border-radius:12px;padding:20px;margin-bottom:20px">
        <div style="text-align:center;margin-bottom:16px">
          <div style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1.5px">Donation Amount</div>
          <div style="font-size:32px;font-weight:800;color:#1a5c3a">${fmtPKR(donation.amount)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:7px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;width:40%">Donation ID</td><td style="padding:7px 0;border-bottom:1px solid #eee;font-size:12px;font-weight:700;font-family:monospace">${donation.id}</td></tr>
          <tr><td style="padding:7px 0;border-bottom:1px solid #eee;font-size:13px;color:#888">Payment Via</td><td style="padding:7px 0;border-bottom:1px solid #eee;font-size:13px;font-weight:700">${method.label}</td></tr>
          <tr><td style="padding:7px 0;font-size:13px;color:#888">Date</td><td style="padding:7px 0;font-size:13px;font-weight:700">${new Date(donation.createdAt).toLocaleDateString('en-PK', {dateStyle:'full'})}</td></tr>
        </table>
      </div>
      <div style="background:#fff8e1;border-radius:10px;padding:14px;font-size:13px;color:#856404;line-height:1.6;margin-bottom:20px">
        Please send your payment screenshot on WhatsApp to <strong>03214022560</strong> to confirm your donation.
      </div>
      <p style="font-size:13px;color:#555;font-style:italic;text-align:center;line-height:1.7">"Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."<br>&mdash; Sahih Bukhari &amp; Muslim</p>
    </div>
    <div style="background:#1a5c3a;padding:16px 32px;text-align:center">
      <div style="font-size:14px;color:#f0d080">Masjid Bait ul Hakeem &mdash; Lahore</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">Maraka Quarters, Multan Road, Lahore</div>
    </div>
  </div>
</body>
</html>`;

  await sendBrevoEmail(
    donation.email,
    donation.name || 'Donor',
    `JazakAllah Khair! Your donation of ${fmtPKR(donation.amount)} to Masjid Bait ul Hakeem`,
    html
  );
  console.log(`📧 Donor confirmation sent to ${donation.email}`);
}


// ══════════════════════════════════════════
//  AUTO PRAYER TIMES — reads from calendar
// ══════════════════════════════════════════

function getTodaysPrayerTimes() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = now.getDate();
  const monthData = PRAYER_CALENDAR[month];
  if (!monthData || !monthData[day]) return null;
  return monthData[day];
}

function formatTime12h(time24) {
  if (!time24) return '—';
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}

// ══════════════════════════════════════════
//  ROUTES
// ══════════════════════════════════════════

// ── GET /api/stats ──
app.get('/api/stats', (req, res) => {
  try {
    const db = readDB();
    const { totalGoal, totalRaised, totalDonors } = db.masjid;
    res.json({ success: true, data: { totalGoal, totalRaised, totalDonors, percent: Math.round((totalRaised / totalGoal) * 100), remaining: totalGoal - totalRaised, lastUpdated: db.masjid.lastUpdated } });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── POST /api/donate ──
app.post('/api/donate', async (req, res) => {
  try {
    const { name, phone, email, amount, paymentMethod } = req.body;
    if (!amount || isNaN(amount) || Number(amount) < 1)
      return res.status(400).json({ success: false, message: 'Invalid donation amount.' });
    if (!paymentMethod)
      return res.status(400).json({ success: false, message: 'Payment method is required.' });

    const db = readDB();
    const donation = {
      id: 'DON-' + Date.now(),
      name: name || 'Anonymous',
      phone: phone || '',
      email: email || '',
      amount: Number(amount),
      paymentMethod,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    db.donations.push(donation);
    db.masjid.totalRaised += Number(amount);
    db.masjid.totalDonors += 1;
    db.masjid.lastUpdated = new Date().toISOString();
    writeDB(db);

    // ── Email alerts (non-blocking) ──
    sendDonationAlert(donation, db.masjid).catch(err => console.error('⚠️  Admin alert failed:', err.message));
    if (donation.email) {
      sendDonorConfirmation(donation).catch(err => console.error('⚠️  Donor email failed:', err.message));
    }

    res.status(201).json({ success: true, message: 'JazakAllah Khair! Donation recorded.', donationId: donation.id, newTotal: db.masjid.totalRaised, newDonors: db.masjid.totalDonors });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── GET /api/donations ──
app.get('/api/donations', (req, res) => {
  try {
    const db = readDB();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1000;
    const donations = [...db.donations].reverse();
    res.json({ success: true, total: donations.length, page, data: donations.slice((page - 1) * limit, page * limit) });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── PATCH /api/donations/:id ──
app.patch('/api/donations/:id', (req, res) => {
  try {
    const db = readDB();
    const donation = db.donations.find(d => d.id === req.params.id);
    if (!donation) return res.status(404).json({ success: false, message: 'Not found.' });
    const { status } = req.body;
    if (!['pending', 'confirmed', 'rejected'].includes(status))
      return res.status(400).json({ success: false, message: 'Invalid status.' });
    donation.status = status;
    writeDB(db);
    res.json({ success: true, donation });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── POST /api/contact ──
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ success: false, message: 'Invalid email.' });

    const db = readDB();
    const contact = { id: 'MSG-' + Date.now(), name, email, phone: phone || '', subject: subject || 'General', message, read: false, createdAt: new Date().toISOString() };
    db.contacts.push(contact);
    writeDB(db);

    sendContactAlert(contact).catch(err => console.error('⚠️  Contact email failed:', err.message));

    res.status(201).json({ success: true, message: 'Message received! We will respond soon, in sha Allah.' });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── GET /api/contacts ──
app.get('/api/contacts', (req, res) => {
  try {
    const db = readDB();
    let contacts = [...db.contacts].reverse();
    if (req.query.unread === 'true') contacts = contacts.filter(c => !c.read);
    res.json({ success: true, total: contacts.length, data: contacts });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── GET /api/prayer-times — auto loads today from calendar ──
app.get('/api/prayer-times', (req, res) => {
  try {
    // Try auto calendar first
    const todayTimes = getTodaysPrayerTimes();
    if (todayTimes) {
      const now = new Date();
      res.json({
        success: true,
        auto: true,
        date: now.toLocaleDateString('en-PK', {weekday:'long', year:'numeric', month:'long', day:'numeric'}),
        data: {
          fajr:    { adhan: todayTimes.fajr,    adhan12: formatTime12h(todayTimes.fajr),    iqama: addMinutes(todayTimes.fajr, 20) },
          zuhr:    { adhan: todayTimes.zuhr,    adhan12: formatTime12h(todayTimes.zuhr),    iqama: addMinutes(todayTimes.zuhr, 15) },
          asr:     { adhan: todayTimes.asr,     adhan12: formatTime12h(todayTimes.asr),     iqama: addMinutes(todayTimes.asr, 15) },
          maghrib: { adhan: todayTimes.maghrib, adhan12: formatTime12h(todayTimes.maghrib), iqama: todayTimes.maghrib },
          isha:    { adhan: todayTimes.isha,    adhan12: formatTime12h(todayTimes.isha),    iqama: addMinutes(todayTimes.isha, 15) },
          jumuah:  { adhan: '13:45', adhan12: '1:45 PM', iqama: '14:00' }
        }
      });
    } else {
      // Fallback to db.json
      const db = readDB();
      res.json({ success: true, auto: false, data: db.prayerTimes });
    }
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// Helper: add minutes to HH:MM string
function addMinutes(time24, mins) {
  const [h, m] = time24.split(':').map(Number);
  const total = h * 60 + m + mins;
  const nh = Math.floor(total / 60) % 24;
  const nm = total % 60;
  return `${String(nh).padStart(2,'0')}:${String(nm).padStart(2,'0')}`;
}
app.put('/api/prayer-times', (req, res) => {
  try { const db = readDB(); db.prayerTimes = { ...db.prayerTimes, ...req.body }; writeDB(db); res.json({ success: true, data: db.prayerTimes }); }
  catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── GET/POST/DELETE /api/gallery ──
app.get('/api/gallery', (req, res) => {
  try { const db = readDB(); let items = db.gallery; if (req.query.phase && req.query.phase !== 'all') items = items.filter(i => i.phase === req.query.phase); res.json({ success: true, total: items.length, data: items }); }
  catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
app.post('/api/gallery', (req, res) => {
  try { const { title, description, phase, imageUrl, date } = req.body; if (!title || !phase) return res.status(400).json({ success: false, message: 'Title and phase required.' }); const db = readDB(); const item = { id: 'IMG-' + Date.now(), title, description: description || '', phase, imageUrl: imageUrl || '', date: date || new Date().toISOString().split('T')[0], createdAt: new Date().toISOString() }; db.gallery.push(item); writeDB(db); res.status(201).json({ success: true, item }); }
  catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
app.delete('/api/gallery/:id', (req, res) => {
  try { const db = readDB(); const before = db.gallery.length; db.gallery = db.gallery.filter(i => i.id !== req.params.id); if (db.gallery.length === before) return res.status(404).json({ success: false, message: 'Not found.' }); writeDB(db); res.json({ success: true }); }
  catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});

// ── 404 ──
app.use((req, res) => { res.status(404).json({ success: false, message: 'Route not found.' }); });

// ── Start ──
app.listen(PORT, () => {
  console.log('');
  console.log('🕌  Masjid Bait ul Hakeem — Server Running');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🌐  Website  → http://localhost:${PORT}`);
  console.log(`🔒  Admin    → http://localhost:${PORT}/admin.html`);
  console.log(`📡  API      → http://localhost:${PORT}/api`);
  console.log(`📧  Alerts  → ${EMAIL_CONFIG.yourEmail}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
});
