import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTour, formatINR } from "@/data/tours";
import { site } from "@/data/site";
import BookingForm from "@/components/BookingForm";
import PaymentDetails from "@/components/PaymentDetails";

// Pre-render a static page for every tour at build time.
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour not found" };
  return {
    title: `${tour.title} — ${tour.nights}N/${tour.days}D`,
    description: tour.summary,
    openGraph: { images: [tour.image] },
  };
}

const tourTitles = tours.map((t) => t.title);

export default async function TourDetail({ params }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi ${site.name}, I'm interested in the "${tour.title}" package. Could you share details?`
  )}`;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-x relative z-10 pb-10 text-white">
          <Link
            href="/tours"
            className="text-sm text-stone-200 hover:text-white"
          >
            ← All tours
          </Link>
          <span className="mt-3 inline-block rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold">
            {tour.category}
          </span>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
            {tour.title}
          </h1>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-200">
            <span>📍 {tour.region}</span>
            <span>🗓️ {tour.nights} Nights / {tour.days} Days</span>
            <span>⛰️ {tour.difficulty}</span>
            <span>👥 {tour.groupSize}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {/* ---------- MAIN ---------- */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Overview
              </h2>
              <p className="mt-3 text-stone-600 leading-relaxed">
                {tour.summary}
              </p>
              <p className="mt-3 text-sm text-stone-500">
                <strong className="text-stone-700">Best season:</strong>{" "}
                {tour.bestSeason}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Trip highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 rounded-xl bg-brand-50 p-3.5 text-sm text-stone-700"
                  >
                    <span className="text-brand-600">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Day-by-day itinerary
              </h2>
              <ol className="mt-5 space-y-5">
                {tour.itinerary.map((d) => (
                  <li key={d.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white">
                        {d.day}
                      </span>
                      {d.day < tour.itinerary.length && (
                        <span className="mt-1 w-px flex-1 bg-stone-200" />
                      )}
                    </div>
                    <div className="pb-1">
                      <h3 className="font-semibold text-stone-900">
                        Day {d.day}: {d.title}
                      </h3>
                      <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-green-50 p-6 ring-1 ring-green-100">
                <h3 className="font-display text-lg font-bold text-green-900">
                  What's included
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-green-900/90">
                  {tour.inclusions.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span>✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-red-50 p-6 ring-1 ring-red-100">
                <h3 className="font-display text-lg font-bold text-red-900">
                  Not included
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-red-900/90">
                  {tour.exclusions.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span>✕</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ---------- SIDEBAR ---------- */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200 shadow-sm">
                <p className="text-sm text-stone-500">Starting from</p>
                <p className="font-display text-3xl font-extrabold text-brand-800">
                  {formatINR(tour.price)}
                  {tour.oldPrice && (
                    <span className="ml-2 text-base font-normal text-stone-400 line-through">
                      {formatINR(tour.oldPrice)}
                    </span>
                  )}
                </p>
                <p className="text-xs text-stone-400">per person</p>

                <dl className="mt-5 space-y-2.5 text-sm">
                  {[
                    ["Duration", `${tour.nights}N / ${tour.days}D`],
                    ["Difficulty", tour.difficulty],
                    ["Group size", tour.groupSize],
                    ["Best season", tour.bestSeason],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-stone-100 pb-2">
                      <dt className="text-stone-500">{k}</dt>
                      <dd className="font-medium text-stone-800">{v}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#book"
                  className="mt-5 block rounded-lg bg-saffron-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-saffron-600 transition"
                >
                  Book This Tour
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-lg bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white hover:brightness-95 transition"
                >
                  Enquire on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl bg-brand-900 p-6 text-white">
                <h3 className="font-display font-bold">Need a custom plan?</h3>
                <p className="mt-1.5 text-sm text-stone-300">
                  We'll tweak this itinerary — dates, hotels, budget — to fit you
                  perfectly.
                </p>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-3 inline-block text-sm font-semibold text-saffron-400 hover:text-saffron-500"
                >
                  Call {site.phone} →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section id="book" className="bg-stone-50 py-16 scroll-mt-20">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-stone-900 text-center">
            Book the {tour.title}
          </h2>
          <p className="mt-2 text-center text-stone-600">
            Fill in the form and our team will confirm availability and a quote
            within 24 hours.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-stone-200 shadow-sm">
              <BookingForm tourTitles={tourTitles} defaultTour={tour.title} />
            </div>
            <div className="lg:col-span-2">
              <PaymentDetails amount={tour.price} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
