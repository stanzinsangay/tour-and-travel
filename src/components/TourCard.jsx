import Link from "next/link";
import { formatINR } from "@/data/tours";

export default function TourCard({ tour }) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/70 shadow-sm">
      <Link href={`/tours/${tour.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm">
          {tour.category}
        </span>
        {tour.oldPrice && (
          <span className="absolute top-3 right-3 rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
            Save {formatINR(tour.oldPrice - tour.price)}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {tour.region}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-stone-900">
          <Link href={`/tours/${tour.slug}`} className="hover:text-brand-700">
            {tour.title}
          </Link>
        </h3>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
          <span>🗓️ {tour.nights}N / {tour.days}D</span>
          <span>⛰️ {tour.difficulty}</span>
          <span>👥 {tour.groupSize}</span>
        </div>

        <p className="mt-3 text-sm text-stone-600 line-clamp-3">{tour.summary}</p>

        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] text-stone-400">From</p>
            <p className="font-display text-xl font-extrabold text-brand-800">
              {formatINR(tour.price)}
              {tour.oldPrice && (
                <span className="ml-1.5 text-sm font-normal text-stone-400 line-through">
                  {formatINR(tour.oldPrice)}
                </span>
              )}
            </p>
            <p className="text-[11px] text-stone-400">per person</p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 transition"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
