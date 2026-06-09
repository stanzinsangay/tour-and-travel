import { site } from "@/data/site";

// Build a prefilled WhatsApp deep link from a booking/enquiry object.
// Pass opts.paid (with optional opts.advanceAmount) to append a line saying
// the advance has been paid and a screenshot is attached.
export function buildWhatsAppLink(data, opts = {}) {
  const lines = [
    `*New Booking Enquiry — ${site.name}*`,
    "",
    data.name ? `Name: ${data.name}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.email ? `Email: ${data.email}` : null,
    data.tour ? `Tour: ${data.tour}` : null,
    data.travelDate ? `Travel date: ${data.travelDate}` : null,
    data.travellers ? `Travellers: ${data.travellers}` : null,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean);

  if (opts.paid) {
    const amt = opts.advanceAmount
      ? ` (₹${Number(opts.advanceAmount).toLocaleString("en-IN")})`
      : "";
    lines.push("", `✅ I've paid the advance${amt} — payment screenshot attached.`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

// Build a UPI deep link (upi://pay?…) that opens the customer's UPI app with
// the payee, amount and note prefilled — so they can pay directly instead of
// scanning a QR or copying the UPI ID. Works on phones with a UPI app
// installed (GPay, PhonePe, Paytm…).
//
// Things UPI apps are strict about — get any wrong and the app rejects the
// payment with the SAME misleading error ("you've exceeded the limit set by
// your bank — retry with a smaller amount"), which has nothing to do with
// limits:
//   • the note (tn) must be plain ASCII — non-ASCII characters like the em-dash
//     "—" cause several apps (PhonePe/GPay) to refuse the intent;
//   • the amount (am) must be a 2-decimal value, e.g. "1.00", not "1";
//   • a prefilled amount (am) to a PERSONAL VPA is blocked by NPCI's anti-fraud
//     rules for person-to-person intents — only a verified MERCHANT VPA may
//     prefill an amount. Our UPI ID (…@ybl) is a personal account, so we OMIT
//     the amount: the app opens with the payee filled in and the customer types
//     the amount (shown clearly in the UI). When a Razorpay/merchant VPA is
//     onboarded, pass `amount` again to restore prefill. See [[otsal-payment-razorpay-planned]].
export function buildUpiLink({ upiId, name, amount, note } = {}) {
  // Plain-ASCII, length-capped note. Replace dashes with a hyphen, drop any
  // remaining non-ASCII characters, and trim to a safe length.
  const cleanNote =
    note &&
    note
      .replace(/[—–]/g, "-")
      .replace(/[^\x20-\x7E]/g, "")
      .trim()
      .slice(0, 50);

  const parts = [
    `pa=${encodeURIComponent(upiId)}`,
    name ? `pn=${encodeURIComponent(name)}` : null,
    // am intentionally omitted — see note above. Prefilling an amount to a
    // personal VPA triggers the misleading "exceeded the limit" rejection.
    "cu=INR",
    cleanNote ? `tn=${encodeURIComponent(cleanNote)}` : null,
  ].filter(Boolean);
  return `upi://pay?${parts.join("&")}`;
}

// Build a mailto: link as an email fallback.
export function buildMailtoLink(data) {
  const subject = encodeURIComponent(
    `Booking enquiry${data.tour ? ` — ${data.tour}` : ""}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${data.name || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `Tour: ${data.tour || ""}`,
      `Travel date: ${data.travelDate || ""}`,
      `Travellers: ${data.travellers || ""}`,
      "",
      `Message:`,
      data.message || "",
    ].join("\n")
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
