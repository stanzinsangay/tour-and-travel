"use client";

import { useState } from "react";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/booking";

const empty = {
  name: "",
  phone: "",
  email: "",
  tour: "",
  travelDate: "",
  travellers: "2",
  message: "",
};

export default function BookingForm({
  tourTitles = [],
  tours = [],
  defaultTour = "",
  priceByTitle = {},
}) {
  const [data, setData] = useState({ ...empty, tour: defaultTour });
  const [error, setError] = useState("");

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Every field (except the optional message) must be filled before we send
    // the enquiry over WhatsApp.
    const required = [
      ["name", "full name"],
      ["phone", "phone / WhatsApp number"],
      ["email", "email"],
      ["tour", "tour"],
      ["travelDate", "travel date"],
      ["travellers", "number of travellers"],
    ];
    const missing = required.filter(([k]) => !String(data[k] ?? "").trim());
    if (missing.length) {
      setError(
        `Please fill in all details before continuing — missing: ${missing
          .map(([, label]) => label)
          .join(", ")}.`
      );
      return;
    }

    // Open WhatsApp with the enquiry details prefilled.
    window.open(buildWhatsAppLink(data), "_blank", "noopener,noreferrer");
  }

  // ---------- DETAILS FORM ----------
  const inputClass =
    "w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *">
          <input
            className={inputClass}
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. Tenzin Dolma"
            required
          />
        </Field>
        <Field label="Phone / WhatsApp *">
          <input
            className={inputClass}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 …"
            required
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email *">
          <input
            type="email"
            className={inputClass}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            required
          />
        </Field>
        <Field label="Interested tour *">
          <select
            className={inputClass}
            value={data.tour}
            onChange={(e) => update("tour", e.target.value)}
            required
          >
            <option value="" disabled>
              Select a tour
            </option>
            {tourTitles.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred travel date *">
          <input
            type="date"
            className={inputClass}
            value={data.travelDate}
            onChange={(e) => update("travelDate", e.target.value)}
            required
          />
        </Field>
        <Field label="Travellers *">
          <input
            type="number"
            min="1"
            className={inputClass}
            value={data.travellers}
            onChange={(e) => update("travellers", e.target.value)}
            required
          />
        </Field>
      </div>

      <Field label="Message (optional)">
        <textarea
          rows={4}
          className={inputClass}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your plans, group, budget or special requests…"
        />
      </Field>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-95 transition"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.18c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
          Enquire on WhatsApp →
        </button>
      </div>

      <p className="text-center text-xs text-stone-400">
        Prefer email?{" "}
        <a href={buildMailtoLink(data)} className="underline hover:text-brand-700">
          Send us an email instead
        </a>
      </p>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-stone-700">
        {label}
      </span>
      {children}
    </label>
  );
}
