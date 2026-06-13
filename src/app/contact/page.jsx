import { site } from "@/data/site";
import BookingForm from "@/components/BookingForm";
import { tours } from "@/data/tours";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OTHSAL Tour & Travel in Leh, Ladakh. Call, email or WhatsApp us — we reply fast.",
};

const tourTitles = tours.map((t) => t.title);

const WhatsAppIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#25D366"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const PhoneIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e7490"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const cards = [
  {
    icon: PhoneIcon,
    title: "Call us",
    lines: [site.phone],
    href: `tel:${site.phone}`,
    cta: "Call now",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: ["Fastest way to reach us"],
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Open chat",
  },
  {
    icon: EmailIcon,
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
                title="OTHSAL office location — Leh, Ladakh"
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
