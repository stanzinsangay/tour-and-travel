# OTSAL Tour & Travel 🏔️

A modern, responsive website for **OTSAL Tour & Travel** — a Ladakh-based tour
operator. Built with **Next.js 16 (App Router)**, **React 19** and **Tailwind
CSS v4**.

## ✨ Features

- **Home page** — hero, stats, featured tours, "why us", testimonials, CTA
- **Tours listing** (`/tours`) — with live category filtering
- **Tour detail pages** (`/tours/[slug]`) — overview, highlights, day-by-day
  itinerary, inclusions/exclusions, price card and an inline booking form
- **Booking page** (`/booking`) — full enquiry form with a "how it works" guide
- **About** & **Contact** pages (with an embedded map and contact cards)
- **Booking system** — form submits to an API route; customers can also send
  the enquiry straight to your **WhatsApp** or **email** (zero config needed)
- Floating WhatsApp button, SEO metadata, mobile-friendly nav, 404 page

## 🚀 Run it locally

```bash
cd otsal-tours
npm install        # already done by the scaffolder
npm run dev        # start the dev server
```

Then open **http://localhost:3000**.

Other commands:

```bash
npm run build      # production build
npm run start      # run the production build
```

## ✏️ How to customise

Everything you'll want to edit lives in **`src/data/`**:

| File                  | What it controls                                            |
| --------------------- | ----------------------------------------------------------- |
| `src/data/site.js`    | Business name, **phone, WhatsApp number, email, address**, social links, stats |
| `src/data/tours.js`   | All tour packages — titles, prices, itineraries, images     |

> **Important:** open `src/data/site.js` and replace the placeholder
> `phone`, `whatsapp` (digits only, e.g. `919876543210`), `email` and
> `address` with OTSAL's real details. The booking form, WhatsApp button and
> footer all read from here.

**Images** use free Unsplash photos. To use your own, change the `image` URLs
in `tours.js` (and the hero images in `src/app/page.js`). You can also drop
files into the `public/` folder and reference them as `/my-photo.jpg`.

## 📩 Receiving bookings

Out of the box, booking enquiries:

1. are **logged on the server** (visible in your terminal / hosting logs), and
2. can be sent by the customer directly to your **WhatsApp** or **email** via
   the buttons on the form.

### Optional: get bookings by email automatically

1. `npm install nodemailer`
2. Copy `.env.example` → `.env.local` and fill in your SMTP details
3. Uncomment the nodemailer block in `src/app/api/booking/route.js`

(For Gmail, create an **App Password** and use it as `SMTP_PASS`.)

## ☁️ Deploying (free options)

- **Vercel** (made by the Next.js team) — push this folder to GitHub and import
  it at [vercel.com](https://vercel.com). Zero config.
- **Netlify** — also supports Next.js apps.

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.js             # root layout (nav, footer, fonts, SEO)
│   ├── page.js               # home page
│   ├── tours/page.jsx        # tours listing
│   ├── tours/[slug]/page.jsx # tour detail (one per package)
│   ├── booking/page.jsx      # booking page
│   ├── about/page.jsx
│   ├── contact/page.jsx
│   ├── not-found.jsx
│   └── api/booking/route.js  # booking endpoint
├── components/               # Navbar, Footer, TourCard, BookingForm, …
├── data/                     # ← edit site.js & tours.js here
└── lib/                      # WhatsApp / mailto helpers
```

---

Made with care for the mountains of Ladakh.
