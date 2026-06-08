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
export function buildUpiLink({ upiId, name, amount, note } = {}) {
  const parts = [
    `pa=${encodeURIComponent(upiId)}`,
    name ? `pn=${encodeURIComponent(name)}` : null,
    amount ? `am=${encodeURIComponent(amount)}` : null,
    "cu=INR",
    note ? `tn=${encodeURIComponent(note)}` : null,
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
