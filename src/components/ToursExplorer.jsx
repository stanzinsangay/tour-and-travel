"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";

export default function ToursExplorer({ tours, categories }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? tours : tours.filter((t) => t.category === active);

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === c
                ? "bg-brand-700 text-white shadow"
                : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TourCard key={t.slug} tour={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-stone-500">
          No tours in this category yet — check back soon!
        </p>
      )}
    </div>
  );
}
