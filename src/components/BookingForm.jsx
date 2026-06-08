"use client";

import { useState } from "react";
import { buildMailtoLink } from "@/lib/booking";
import PaymentDetails from "@/components/PaymentDetails";

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
  defaultTour = "",
  priceByTitle = {},
}) {
  const [data, setData] = useState({ ...empty, tour: defaultTour });
  const [step, setStep] = useState("form"); // form | pay
  const [error, setError] = useState("");

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!data.name || !data.phone) {
      setError("Please share at least your name and phone number.");
      return;
    }

    // Move on to the payment step.
    setStep("pay");
  }

  // ---------- STEP 2: PAYMENT ----------
  if (step === "pay") {
    return (
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Step 2 of 2
            </p>
            <h3 className="font-display text-xl font-bold text-stone-900">
              Pay advance to confirm
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Thanks {data.name.split(" ")[0]} — pay the advance below, then send
              your details &amp; screenshot to us on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStep("form")}
            className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition"
          >
            ← Edit details
          </button>
        </div>

        <PaymentDetails enquiry={data} />
      </div>
    );
  }

  // ---------- STEP 1: DETAILS FORM ----------
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

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-800 transition"
        >
          Continue to payment →
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
