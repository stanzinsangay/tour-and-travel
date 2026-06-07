import { NextResponse } from "next/server";

// Booking enquiry endpoint.
//
// Validates the submission, logs it on the server, and emails it to you.
// Email delivery is active and uses nodemailer — it needs these environment
// variables in `.env.local` (see `.env.example`):
//
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO
//
// If those vars are not set, the enquiry is still logged on the server and
// the customer can fall back to the WhatsApp / email buttons on the form.

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

  // --- Send the enquiry to you by email via nodemailer ------------------
  // Requires SMTP_* env vars in .env.local (see .env.example).
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
      console.log("✅ Enquiry emailed to", process.env.BOOKING_TO || process.env.SMTP_USER);
    } else {
      console.warn(
        "⚠️  SMTP not configured — enquiry was logged but NOT emailed. Set SMTP_* in .env.local."
      );
    }
  } catch (err) {
    console.error("Email send failed:", err);
    // We don't fail the request — the enquiry is still logged and the user
    // can fall back to WhatsApp.
  }

  return NextResponse.json({ ok: true });
}
