"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { formatINR } from "@/data/tours";
import { buildWhatsAppLink, buildUpiLink } from "@/lib/booking";
import { downloadBookingPdf } from "@/lib/pdf";

// Shows direct UPI payment details so a customer can pay the advance, then
// confirm by sending a screenshot on WhatsApp.
// On a phone we show a "Pay now" button that opens the customer's UPI app
// directly (via a upi://pay deep link) with the payee and amount prefilled.
// On a desktop browser — where there's no UPI app to open — we fall back to
// showing the QR code and UPI ID to scan / copy instead.
// Pass `enquiry` (the booking form data) so the WhatsApp message includes the
// customer's details along with the paid-advance note.
export default function PaymentDetails({ enquiry, tour = null }) {
  const p = site.payment;
  const [copied, setCopied] = useState("");
  const [pdfBusy, setPdfBusy] = useState(false);
  // The booking PDF unlocks only once the customer has actually gone through
  // the payment step — NOT on a plain "I've paid" claim (that let people grab
  // the confirmation without paying). It unlocks when either:
  //   • the customer taps "Pay now", is sent to their UPI app, and then RETURNS
  //     to this page (detected via the Page Visibility API), or
  //   • the customer sends the payment screenshot on WhatsApp (which the owner
  //     verifies before the booking is treated as confirmed).
  // NOTE: with manual UPI (no payment gateway) the page can't *prove* money
  // arrived — true verification needs a gateway like Razorpay/PhonePe Business.
  const [paid, setPaid] = useState(false);
  // Set when the customer leaves for their UPI app via the "Pay now" button, so
  // we only unlock on the return trip that follows a real payment attempt.
  const awaitingPayment = useRef(false);
  // Default to desktop (QR + UPI ID) so server and first client render match;
  // we flip to the deep-link button after detecting a mobile device on mount.
  const [isMobile, setIsMobile] = useState(false);
  // QR generated from the upi://pay link. It embeds the payee (not the amount —
  // see buildUpiLink: a prefilled amount to a personal VPA is rejected), so the
  // payer scans it and types the advance shown in the UI.
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent));
  }, []);

  // Unlock the PDF when the customer comes back to this tab after being sent
  // to their UPI app to pay. Only fires if they actually tapped "Pay now"
  // (awaitingPayment), so simply revisiting the page doesn't unlock it.
  useEffect(() => {
    function onVisibility() {
      if (document.visibilityState === "visible" && awaitingPayment.current) {
        awaitingPayment.current = false;
        setPaid(true);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function copy(text, key) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  }

  async function handleDownloadPdf() {
    setPdfBusy(true);
    try {
      await downloadBookingPdf({ enquiry, tour });
    } catch {
      // Surface a minimal hint; PDF generation runs entirely client-side.
      alert("Sorry, the PDF couldn't be generated. Please try again.");
    } finally {
      setPdfBusy(false);
    }
  }

  const advance = p.advanceAmount;

  const upiHref = buildUpiLink({
    upiId: p.upiId,
    name: p.upiName,
    amount: advance,
    note: enquiry?.tour
      ? `${site.shortName} advance — ${enquiry.tour}`
      : `${site.shortName} booking advance`,
  });

  // Render the upi://pay link (payee only, no amount) to a QR data URL on the
  // client. Falls back to the static p.qr image if generation fails.
  useEffect(() => {
    let cancelled = false;
    import("qrcode")
      .then(({ default: QRCode }) =>
        QRCode.toDataURL(upiHref, { margin: 1, width: 320 })
      )
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [upiHref]);

  const waHref = enquiry
    ? buildWhatsAppLink(enquiry, { paid: true, advanceAmount: advance })
    : `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `Hi ${site.name}, I've paid the advance for my Ladakh tour. Here is my payment screenshot.`
      )}`;

  const buttonLabel = enquiry
    ? "Send details + screenshot on WhatsApp"
    : "I've paid — send screenshot on WhatsApp";

  const rows = [
    ["Account name", p.accountName],
    ["Bank", p.bankName],
    ["Account no.", p.accountNumber],
    ["IFSC", p.ifsc],
  ].filter(([, v]) => v);

  const hasBankDetails = rows.length > 0;

  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200 shadow-sm">
      <h3 className="font-display text-lg font-bold text-stone-900">
        Pay your advance & confirm
      </h3>
      <p className="mt-1.5 text-sm text-stone-600">
        Pay a {formatINR(advance)} advance to lock your dates. The balance is
        payable on arrival in Leh.
      </p>

      {/* UPI */}
      <div className="mt-5 rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
          Pay by UPI
        </p>

        {isMobile ? (
          // Phone: open the customer's payment app directly.
          <>
            <a
              href={upiHref}
              onClick={() => {
                awaitingPayment.current = true;
              }}
              className="mt-2 block rounded-lg bg-brand-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition"
            >
              Pay {formatINR(advance)} now
            </a>
            <p className="mt-2 text-center text-xs text-stone-500">
              Opens your UPI app (GPay, PhonePe, Paytm…) with{" "}
              <span className="font-mono text-stone-700">{p.upiId}</span> filled
              in. Enter <span className="font-semibold text-stone-700">{formatINR(advance)}</span> as the amount.
            </p>
          </>
        ) : (
          // Desktop: no UPI app to open — show the ID to copy and the QR to scan.
          <>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-stone-800 break-all">
                {p.upiId}
              </span>
              <button
                type="button"
                onClick={() => copy(p.upiId, "upi")}
                className="shrink-0 rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-800 transition"
              >
                {copied === "upi" ? "Copied ✓" : "Copy"}
              </button>
            </div>
            {qrDataUrl || p.qr ? (
              <div className="mt-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrDataUrl || p.qr}
                  alt={`UPI QR code for ${p.upiName}`}
                  className="h-40 w-40 rounded-lg ring-1 ring-stone-200"
                />
                <p className="mt-1 text-xs text-stone-500">
                  Scan with any UPI app (GPay, PhonePe, Paytm…), then enter{" "}
                  {formatINR(advance)} as the amount.
                </p>
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Bank transfer — only shown once bank details are filled in */}
      {hasBankDetails ? (
        <div className="mt-3 rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            Bank transfer (NEFT / IMPS)
          </p>
          <dl className="mt-2 space-y-1.5 text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3">
                <dt className="text-stone-500">{k}</dt>
                <dd className="font-medium text-stone-800 text-right break-all">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setPaid(true)}
        className="mt-5 block rounded-lg bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white shadow-md hover:brightness-95 transition"
      >
        {buttonLabel}
      </a>

      {/* The PDF stays locked until the customer has actually paid:
          - mobile: it unlocks automatically when they return from the UPI app;
          - either device: sending the WhatsApp screenshot also unlocks it. */}
      {paid ? (
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={pdfBusy}
          className="mt-3 block w-full rounded-lg border border-stone-300 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pdfBusy ? "Preparing PDF…" : "⬇ Download payment & tour details (PDF)"}
        </button>
      ) : (
        <p className="mt-3 rounded-lg bg-stone-50 px-4 py-3 text-center text-xs text-stone-500 ring-1 ring-stone-200">
          🔒 {isMobile
            ? "Complete the payment above — when you come back to this page, your booking PDF will be ready to download here."
            : "After paying, tap the WhatsApp button above to send your screenshot — your booking PDF will then be ready to download here."}
        </p>
      )}
      <p className="mt-2 text-center text-xs text-stone-400">
        Opens WhatsApp with your details — just attach the screenshot and send.
        Your booking is confirmed once we receive the advance.
        {paid ? " Your PDF is now ready to download above." : ""}
      </p>
    </div>
  );
}
