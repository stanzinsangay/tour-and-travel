"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const QUICK_REPLIES = [
  { q: "What tours do you offer?", key: "tours" },
  { q: "How much does a tour cost?", key: "price" },
  { q: "Best time to visit Ladakh?", key: "season" },
  { q: "How do I book?", key: "booking" },
  { q: "Talk to a human", key: "human" },
];

function botReply(key) {
  switch (key) {
    case "tours":
      return "We run curated Ladakh journeys — the Leh Ladakh Explorer, Pangong & Nubra Adventure, Leh Local Discovery and the Markha Valley Trek. Browse them all on our Tours page.";
    case "price":
      return "Our packages start from ₹14,999 per person. Final pricing depends on the itinerary, group size and season. Tell us your dates on WhatsApp for an exact quote.";
    case "season":
      return "May to September is the prime season for Ladakh — clear skies, open passes and all lakes accessible. Some short breaks run April–October.";
    case "booking":
      return `Booking is simple: pick a tour, fill the booking form, and pay a ₹${site.payment.advanceAmount.toLocaleString("en-IN")} advance via UPI to confirm. Head to any tour page and tap "Book Now".`;
    case "human":
      return `Sure! Reach us on WhatsApp at ${site.phone} or email ${site.email}. We're available ${site.hours}.`;
    default:
      return "I'm a simple assistant — try one of the quick options below, or contact us directly on WhatsApp.";
  }
}

const KEYWORDS = [
  { key: "tours", words: ["tour", "package", "trip", "itinerary", "trek", "bike", "offer"] },
  { key: "price", words: ["price", "cost", "rate", "how much", "fee", "charge", "budget", "expensive"] },
  { key: "season", words: ["season", "when", "time", "month", "weather", "best time", "visit"] },
  { key: "booking", words: ["book", "reserve", "advance", "pay", "payment", "deposit", "confirm"] },
  { key: "human", words: ["human", "agent", "call", "phone", "whatsapp", "email", "contact", "talk", "person"] },
];

function matchReply(text) {
  const lower = text.toLowerCase();
  for (const { key, words } of KEYWORDS) {
    if (words.some((w) => lower.includes(w))) return botReply(key);
  }
  return botReply("default");
}

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Namaste! I'm the ${site.shortName} assistant. How can I help plan your Ladakh trip?`,
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleReply({ q, key }) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: botReply(key) },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: matchReply(text) },
    ]);
    setInput("");
  }

  return (
    <>
      {/* Toggle button — sits above the WhatsApp float */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-24 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-brand-600 text-white shadow-lg hover:scale-105 transition"
      >
        {open ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.4 1.1 4.56 2.9 6.12-.13 1.2-.6 2.5-1.4 3.58-.18.24-.02.6.29.55 1.7-.27 3.2-.85 4.34-1.66.9.26 1.87.41 2.87.41 5.52 0 10-3.94 10-8.8S17.52 2 12 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-44 right-5 z-50 w-[min(92vw,22rem)] rounded-2xl bg-white shadow-2xl ring-1 ring-stone-200 overflow-hidden animate-fade-up">
          <div className="bg-brand-700 text-white px-4 py-3">
            <p className="font-display font-semibold leading-tight">{site.name}</p>
            <p className="text-xs text-brand-100">Typically replies within minutes</p>
          </div>

          <div ref={scrollRef} className="max-h-72 overflow-y-auto px-4 py-3 space-y-3 bg-stone-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "bg-brand-600 text-white rounded-br-sm"
                      : "bg-white text-stone-700 ring-1 ring-stone-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 px-3 py-3 bg-white space-y-3">
            <div className="flex flex-wrap gap-2">
              {QUICK_REPLIES.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => handleReply(r)}
                  className="text-xs rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-brand-700 hover:bg-brand-100 transition"
                >
                  {r.q}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                aria-label="Type your message"
                className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim()}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700 disabled:opacity-40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
