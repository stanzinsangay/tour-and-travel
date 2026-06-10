import { site } from "@/data/site";

// Generates and downloads a booking-summary PDF after the customer has paid:
// their details, the chosen tour (itinerary, inclusions…) and the payment
// breakdown. Built client-side with jsPDF (lazy-imported so it stays out of
// the initial bundle). jsPDF's standard fonts are Latin-1 only and can't draw
// the ₹ glyph, so amounts are written as "Rs ".
//
//   enquiry — the booking form data ({ name, phone, email, tour, travelDate,
//             travellers, message })
//   tour    — the matching tour object from src/data/tours.js (may be null for
//             a custom / undecided trip)
// Returns the generated booking reference (also stamped on the PDF).
export async function downloadBookingPdf({ enquiry = {}, tour = null } = {}) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pay = site.payment;
  const advance = pay.advanceAmount;
  const ref = makeBookingRef();
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const M = 48; // page margin
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const contentW = pageW - M * 2;
  let y = M;

  // Move the cursor down, adding a new page if we'd overflow the bottom margin.
  function ensure(space) {
    if (y + space > pageH - M) {
      doc.addPage();
      y = M;
    }
  }

  function heading(text) {
    ensure(34);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text(text, M, y);
    y += 8;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(1);
    doc.line(M, y, pageW - M, y);
    y += 16;
  }

  // A label/value row, value wrapped to the right-hand column.
  function row(label, value) {
    if (value == null || value === "") return;
    const labelW = 140;
    const valLines = doc.splitTextToSize(String(value), contentW - labelW);
    ensure(valLines.length * 14 + 4);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text(label, M, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    doc.text(valLines, M + labelW, y);
    y += valLines.length * 14 + 4;
  }

  // A wrapped paragraph / bullet block.
  function para(text, { bullet = false, indent = 0, gap = 4 } = {}) {
    const x = M + indent;
    const prefix = bullet ? "•  " : "";
    const lines = doc.splitTextToSize(prefix + text, contentW - indent);
    ensure(lines.length * 13 + gap);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(lines, x, y);
    y += lines.length * 13 + gap;
  }

  // ---- Header band ----
  doc.setFillColor(12, 74, 110); // brand-900-ish
  doc.rect(0, 0, pageW, 96, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(site.name, M, 44);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(186, 230, 253);
  doc.text(site.tagline || "", M, 62);
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text("Booking Confirmation", pageW - M, 44, { align: "right" });
  doc.setFontSize(9);
  doc.setTextColor(186, 230, 253);
  doc.text(`Ref: ${ref}`, pageW - M, 60, { align: "right" });
  doc.text(`Date: ${today}`, pageW - M, 74, { align: "right" });
  y = 128;

  // ---- Customer ----
  heading("Customer details");
  row("Name", enquiry.name);
  row("Phone / WhatsApp", enquiry.phone);
  row("Email", enquiry.email);

  // ---- Tour ----
  heading("Tour details");
  row("Tour", tour?.title || enquiry.tour || "Custom / to be decided");
  if (tour) {
    row("Region", tour.region);
    row("Duration", `${tour.days} days / ${tour.nights} nights`);
    row("Best season", tour.bestSeason);
    row("Difficulty", tour.difficulty);
  }
  row("Preferred travel date", enquiry.travelDate || "To be confirmed");
  row("Travellers", enquiry.travellers);
  if (enquiry.message) row("Notes", enquiry.message);

  // ---- Payment ----
  heading("Payment summary");
  row("Advance paid", `Rs ${fmt(advance)}`);
  if (tour?.price) {
    const travellers = Number(enquiry.travellers) || 1;
    const total = tour.price * travellers;
    row(
      "Package price",
      `Rs ${fmt(tour.price)} per person${
        travellers > 1 ? `  ( x ${travellers} = Rs ${fmt(total)} )` : ""
      }`
    );
    row("Balance on arrival", `Rs ${fmt(Math.max(total - advance, 0))}`);
  }
  row("Paid to (UPI)", `${pay.upiId}  (${pay.upiName})`);
  para(
    "The advance confirms your booking dates. The balance is payable on arrival in Leh. This is a payment acknowledgement summary, not a tax invoice.",
    { gap: 10 }
  );

  // ---- Itinerary ----
  if (tour?.itinerary?.length) {
    heading("Day-by-day itinerary");
    tour.itinerary.forEach((d) => {
      para(`Day ${d.day}: ${d.title}`, { gap: 1 });
      if (d.desc) para(d.desc, { indent: 14, gap: 8 });
    });
  }

  // ---- Inclusions / exclusions ----
  if (tour?.inclusions?.length) {
    heading("What's included");
    tour.inclusions.forEach((i) => para(i, { bullet: true, indent: 4 }));
    y += 4;
  }
  if (tour?.exclusions?.length) {
    heading("Not included");
    tour.exclusions.forEach((i) => para(i, { bullet: true, indent: 4 }));
  }

  // ---- Footer on every page ----
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(1);
    doc.line(M, pageH - 40, pageW - M, pageH - 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      `${site.name}  •  ${site.phone}  •  ${site.email}`,
      M,
      pageH - 26
    );
    doc.text(`Page ${i} of ${pages}`, pageW - M, pageH - 26, {
      align: "right",
    });
  }

  const safeName = (enquiry.name || "booking")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  doc.save(`OTHSAL-${safeName || "booking"}-${ref}.pdf`);
  return ref;
}

// e.g. OTHSAL-250609-4821
function makeBookingRef() {
  const d = new Date();
  const ymd =
    String(d.getFullYear()).slice(2) +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  return `OTHSAL-${ymd}-${rand}`;
}

function fmt(n) {
  return Number(n).toLocaleString("en-IN");
}
