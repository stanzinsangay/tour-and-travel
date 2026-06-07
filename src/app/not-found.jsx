import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-5 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-brand-700">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-stone-900">
          This trail doesn't exist
        </h1>
        <p className="mt-2 text-stone-600">
          The page you're looking for has wandered off into the mountains.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Back home
          </Link>
          <Link
            href="/tours"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-stone-700 ring-1 ring-stone-300 hover:bg-stone-50"
          >
            Browse tours
          </Link>
        </div>
      </div>
    </section>
  );
}
