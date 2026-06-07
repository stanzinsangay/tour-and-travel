import { site } from "@/data/site";
import BookingForm from "@/components/BookingForm";
import { tours } from "@/data/tours";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OTSAL Tour & Travel in Leh, Ladakh. Call, email or WhatsApp us — we reply fast.",
};

const tourTitles = tours.map((t) => t.title);

const cards = [
  {
    icon: "📞",
    title: "Call us",
    lines: [site.phone],
    href: `tel:${site.phone}`,
    cta: "Call now",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    lines: ["Fastest way to reach us"],
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Open chat",
  },
  {
    icon: "✉️",
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: "Send email",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            Contact
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            Talk to a real Ladakhi
          </h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            Questions about a tour, a custom plan, or anything Ladakh? We're here
            every day, {site.hours}.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-14">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card-hover rounded-2xl bg-white p-7 ring-1 ring-stone-200/70 shadow-sm"
            >
              <div className="text-3xl">{c.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold text-stone-900">
                {c.title}
              </h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1 text-sm text-stone-600">
                  {l}
                </p>
              ))}
              <span className="mt-4 inline-block text-sm font-semibold text-brand-700">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + details */}
      <section className="pb-16">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-stone-200 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-stone-900">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              We typically reply within a few hours.
            </p>
            <div className="mt-6">
              <BookingForm tourTitles={tourTitles} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <h3 className="font-display text-lg font-bold text-stone-900">
                Visit our office
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {site.address}
              </p>
              <p className="mt-3 text-sm text-stone-600">
                <strong className="text-stone-800">Hours:</strong> {site.hours}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200">
              <iframe
                title="OTSAL office location — Leh, Ladakh"
                src="https://www.google.com/maps?q=Leh,Ladakh&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
