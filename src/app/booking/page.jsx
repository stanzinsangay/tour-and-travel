import { tours } from "@/data/tours";
import { site } from "@/data/site";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Your Ladakh Tour",
  description:
    "Book or enquire about your Ladakh trip with OTSAL Tour & Travel. Get a tailor-made itinerary and quote within 24 hours.",
};

const tourTitles = tours.map((t) => t.title);
const priceByTitle = Object.fromEntries(tours.map((t) => [t.title, t.price]));

const steps = [
  { n: "1", t: "Send your details", d: "Tell us your tour, dates and group size." },
  { n: "2", t: "Get a custom plan", d: "We reply within 24 hrs with an itinerary & quote." },
  { n: "3", t: "Confirm & travel", d: "Pay a small advance and we handle the rest." },
];

export default function BookingPage() {
  return (
    <>
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            Booking
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            Plan your Ladakh trip
          </h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            No payment needed to enquire. Share a few details and our local team
            will craft a tailor-made itinerary just for you.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-stone-200 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-stone-900">
              Booking enquiry form
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Fields marked * are required.
            </p>
            <div className="mt-6">
              <BookingForm tourTitles={tourTitles} tours={tours} priceByTitle={priceByTitle} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
              <h3 className="font-display text-lg font-bold text-stone-900">
                How it works
              </h3>
              <ol className="mt-4 space-y-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-semibold text-stone-800">{s.t}</p>
                      <p className="text-sm text-stone-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-brand-900 p-6 text-white">
              <h3 className="font-display text-lg font-bold">
                Prefer to talk?
              </h3>
              <p className="mt-1.5 text-sm text-stone-300">
                Our team is on call every day, {site.hours}.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a href={`tel:${site.phone}`} className="block hover:text-saffron-400">
                  📞 {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="block hover:text-saffron-400">
                  ✉️ {site.email}
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-saffron-400"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
