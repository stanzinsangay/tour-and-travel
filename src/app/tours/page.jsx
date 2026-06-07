import { tours, categories } from "@/data/tours";
import ToursExplorer from "@/components/ToursExplorer";

export const metadata = {
  title: "Ladakh Tour Packages",
  description:
    "Browse OTSAL's Ladakh tour packages — sightseeing circuits, bike expeditions, treks, family holidays and offbeat Changthang journeys. All fully customisable.",
};

export default function ToursPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            Our Tours
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            Ladakh tour packages
          </h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            Sightseeing circuits, motorcycle expeditions, Himalayan treks and
            offbeat adventures — every itinerary is fully customisable to your
            dates, pace and budget.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x">
          <ToursExplorer tours={tours} categories={categories} />
        </div>
      </section>
    </>
  );
}
