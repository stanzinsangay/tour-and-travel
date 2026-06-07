"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { formatINR } from "@/data/tours";

// Shows direct UPI / bank-transfer payment details so a customer can pay the
// advance themselves, then confirm by sending a screenshot on WhatsApp.
// Pass `amount` (the full tour price) to display the exact advance figure.
export default function PaymentDetails({ amount }) {
  const p = site.payment;
  const [copied, setCopied] = useState("");

  function copy(text, key) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    });
  }

  const advance = amount ? Math.round((amount * p.advancePercent) / 100) : null;

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi ${site.name}, I've paid the advance for my Ladakh tour. Here is my payment screenshot.`
  )}`;

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
        Pay a {p.advancePercent}% advance
        {advance ? (
          <>
            {" "}
            (<strong className="text-stone-800">{formatINR(advance)}</strong>)
          </>
        ) : null}{" "}
        to lock your dates. The balance is payable on arrival in Leh.
      </p>

      {/* UPI */}
      <div className="mt-5 rounded-xl bg-stone-50 ring-1 ring-stone-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
          Pay by UPI
        </p>
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
        {p.qr ? (
          <div className="mt-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.qr}
              alt={`UPI QR code for ${p.upiName}`}
              className="h-40 w-40 rounded-lg ring-1 ring-stone-200"
            />
            <p className="mt-1 text-xs text-stone-500">
              Scan with any UPI app (GPay, PhonePe, Paytm…)
            </p>
          </div>
        ) : null}
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
        className="mt-5 block rounded-lg bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white shadow-md hover:brightness-95 transition"
      >
        I&apos;ve paid — send screenshot on WhatsApp
      </a>
      <p className="mt-2 text-center text-xs text-stone-400">
        Your booking is confirmed once we receive the advance.
      </p>
    </div>
  );
}
