import { NextResponse } from "next/server";

// Booking enquiry endpoint.
//
// Out of the box this validates the submission, logs it on the server and
// returns success — so the website works with zero configuration.
//
// To actually receive bookings by EMAIL, install nodemailer
// (`npm install nodemailer`) and set these environment variables in
// `.env.local` (see `.env.example`):
//
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO
//
// then uncomment the nodemailer block below.

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone } = data || {};
  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 }
    );
  }

  // Always log on the server so you can see enquiries in the dev console / logs.
  console.log("📩 New booking enquiry:", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    tour: data.tour,
    travelDate: data.travelDate,
    travellers: data.travellers,
    message: data.message,
  });

  // --- Optional: send an email via nodemailer ---------------------------
  // Uncomment after `npm install nodemailer` and setting SMTP_* env vars.
  /*
  try {
    if (process.env.SMTP_HOST) {
      const nodemailer = (await import("nodemailer")).default;
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"OTSAL Website" <${process.env.SMTP_USER}>`,
        to: process.env.BOOKING_TO || process.env.SMTP_USER,
        replyTo: data.email || undefined,
        subject: `New booking enquiry — ${data.tour || "Custom trip"}`,
        text:
          `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n` +
          `Tour: ${data.tour}\nTravel date: ${data.travelDate}\n` +
          `Travellers: ${data.travellers}\n\nMessage:\n${data.message}`,
      });
    }
  } catch (err) {
    console.error("Email send failed:", err);
    // We don't fail the request — the enquiry is still logged and the user
    // can fall back to WhatsApp.
  }
  */

  return NextResponse.json({ ok: true });
}
