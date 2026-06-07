"use client";

import { useState } from "react";
import { buildWhatsAppLink, buildMailtoLink } from "@/lib/booking";

const empty = {
  name: "",
  phone: "",
  email: "",
  tour: "",
  travelDate: "",
  travellers: "2",
  message: "",
};

export default function BookingForm({ tourTitles = [], defaultTour = "" }) {
  const [data, setData] = useState({ ...empty, tour: defaultTour });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    if (!data.name || !data.phone) {
      setStatus("error");
      setError("Please share at least your name and phone number.");
      return;
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Could not send your request. Please try WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 ring-1 ring-green-200 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white text-2xl">
          ✓
        </div>
        <h3 className="font-display text-xl font-bold text-green-900">
          Enquiry received — thank you!
        </h3>
        <p className="mt-2 text-sm text-green-800">
          Our Ladakh team will get back to you within 24 hours. For a faster
          reply, message us directly on WhatsApp.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsAppLink(data)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Continue on WhatsApp
          </a>
          <button
            onClick={() => {
              setData({ ...empty, tour: defaultTour });
              setStatus("idle");
            }}
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 ring-1 ring-stone-300"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

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
        <Field label="Email">
          <input
            type="email"
            className={inputClass}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Interested tour">
          <select
            className={inputClass}
            value={data.tour}
            onChange={(e) => update("tour", e.target.value)}
          >
            <option value="">Not sure yet / custom trip</option>
            {tourTitles.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred travel date">
          <input
            type="date"
            className={inputClass}
            value={data.travelDate}
            onChange={(e) => update("travelDate", e.target.value)}
          />
        </Field>
        <Field label="Travellers">
          <input
            type="number"
            min="1"
            className={inputClass}
            value={data.travellers}
            onChange={(e) => update("travellers", e.target.value)}
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          rows={4}
          className={inputClass}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your plans, group, budget or special requests…"
        />
      </Field>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex-1 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 disabled:opacity-60 transition"
        >
          {status === "sending" ? "Sending…" : "Send Booking Enquiry"}
        </button>
        <a
          href={buildWhatsAppLink(data)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-95 transition"
        >
          Book on WhatsApp
        </a>
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
