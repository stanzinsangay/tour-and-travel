// Central place for all business / contact details.
// Edit these once and they update across the whole website.

export const site = {
  name: "OTHSAL Tour & Travel",
  shortName: "OTHSAL",
  tagline: "Discover the Soul of Ladakh",
  description:
    "OTHSAL Tour & Travel is a Ladakh-based travel company crafting unforgettable journeys across Leh, Nubra, Pangong, Tso Moriri and the high Himalaya. Tailor-made tours, bike expeditions, treks and family holidays — run by locals who call these mountains home.",

  // --- Contact details (edit these to your real numbers) ---
  phone: "+91 94192 12533",
  // WhatsApp number in international format, digits only (no +, spaces or dashes)
  whatsapp: "919419212533",
  email: "lodeosangpo@gmail.com",
  address: "Main Bazaar Road, Leh, Ladakh 194101, India",

  // Office hours
  hours: "Mon – Sun: 9:00 AM – 8:00 PM (IST)",

  // --- Payment details (direct UPI / bank transfer) ---
  // Fill these with your REAL details. They show on the booking page so a
  // customer can pay the advance directly, then send a screenshot on WhatsApp.
  payment: {
    advanceAmount: 1, // flat advance (₹) needed to confirm a booking
    upiId: "7006120301@ybl", // PhonePe UPI ID
    upiName: "OTHSAL Tour & Travel", // name shown to payer on UPI
    // Bank details — left blank for now, will be filled in later.
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    // UPI QR image in /public.
    qr: "/qrcode.jpeg",
  },

  // --- Social links (replace # with your real profiles) ---
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },

  // Used for stats strip on the homepage
  stats: [
    { value: "12+", label: "Years in Ladakh" },
    { value: "8,000+", label: "Happy Travellers" },
    { value: "40+", label: "Curated Itineraries" },
    { value: "4.9/5", label: "Average Rating" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
