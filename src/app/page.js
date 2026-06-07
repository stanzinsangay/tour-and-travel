import Link from "next/link";
import { tours } from "@/data/tours";
import { site } from "@/data/site";
import TourCard from "@/components/TourCard";
import SectionHeading from "@/components/SectionHeading";

const featured = tours.filter((t) => t.featured).slice(0, 3);

const reasons = [
  {
    icon: "🏔️",
    title: "Born & raised in Ladakh",
    text: "We're locals. Our guides know every pass, monastery and hidden viewpoint — and the families who run the homestays you'll sleep in.",
  },
  {
    icon: "🛡️",
    title: "Safety at altitude",
    text: "Sensible acclimatisation built into every itinerary, oxygen and first-aid in every vehicle, and 24×7 on-trip support.",
  },
  {
    icon: "🧭",
    title: "Tailor-made, not cookie-cutter",
    text: "Every trip is shaped around you — your pace, budget and interests. Fixed packages or fully custom, your call.",
  },
  {
    icon: "💬",
    title: "Real people, instant replies",
    text: "Talk to an actual human on WhatsApp before, during and after your trip. No call centres, no bots.",
  },
];

const testimonials = [
  {
    name: "Aarav & Meera",
    place: "Mumbai",
    text: "Pangong at sunrise with OTSAL was the highlight of our year. Everything just worked — pickups, permits, the camps. Felt looked-after the whole way.",
  },
  {
    name: "Sophie L.",
    place: "London, UK",
    text: "Did the Markha Valley trek with their team. Brilliant guide, warm homestays and genuinely safe pacing. Cannot recommend enough.",
  },
  {
    name: "Rohit Sharma",
    place: "Bengaluru",
    text: "Manali–Leh bike expedition of a lifetime. The backup vehicle and mechanic gave us total peace of mind on those passes.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[88vh] flex items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1610207294519-f98dba0c4d75?auto=format&fit=crop&w=2000&q=80"
          alt="Pangong Lake, Ladakh"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-x relative z-10 pb-16 md:pb-24 pt-32 text-white">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              🏔️ Ladakh-based · Locally owned
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-stone-100/90">
              From the turquoise of Pangong to the dunes of Nubra and the high
              passes in between — let OTSAL craft your perfect Himalayan journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/tours"
                className="rounded-xl bg-saffron-500 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-saffron-600 transition"
              >
                Explore Tours
              </Link>
              <Link
                href="/booking"
                className="rounded-xl bg-white/95 px-7 py-3.5 font-semibold text-brand-900 shadow-lg hover:bg-white transition"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="bg-brand-900 text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-saffron-400">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-stone-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED TOURS ---------- */}
      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeading
              eyebrow="Most loved"
              title="Featured Ladakh tours"
              subtitle="Hand-picked itineraries our travellers rave about. Every package is fully customisable."
            />
            <Link
              href="/tours"
              className="shrink-0 rounded-lg border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition"
            >
              View all tours →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="bg-stone-50 py-20">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Why OTSAL"
            title="Ladakh, done right"
            subtitle="Twelve years on these roads. Here's what travelling with a true local outfit gets you."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-stone-200/70 shadow-sm"
              >
                <div className="text-3xl">{r.icon}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-stone-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Traveller stories"
            title="Loved by 8,000+ travellers"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl bg-white p-7 ring-1 ring-stone-200/70 shadow-sm"
              >
                <div className="text-saffron-500 text-lg">★★★★★</div>
                <blockquote className="mt-3 text-stone-700 leading-relaxed">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-stone-900">{t.name}</span>
                  <span className="text-stone-500"> · {t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80"
          alt="Nubra Valley, Ladakh"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/80" />
        <div className="container-x relative z-10 py-20 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold">
            Ready for the mountains?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-stone-200">
            Tell us your dates and dreams. We'll send a tailor-made Ladakh
            itinerary and quote within 24 hours — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/booking"
              className="rounded-xl bg-saffron-500 px-8 py-3.5 font-semibold text-white shadow-lg hover:bg-saffron-600 transition"
            >
              Start Planning
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="rounded-xl bg-white/10 px-8 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20 transition"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
