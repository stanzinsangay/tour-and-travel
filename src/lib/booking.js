import { site } from "@/data/site";

// Build a prefilled WhatsApp deep link from a booking/enquiry object.
export function buildWhatsAppLink(data) {
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

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${text}`;
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
