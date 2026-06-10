import Link from "next/link";

// Shared layout for legal / policy pages (cancellation, terms, privacy).
// Renders a consistent hero + readable prose column.
export default function PolicyPage({ eyebrow, title, intro, updated, children }) {
  return (
    <>
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 max-w-2xl text-stone-300">{intro}</p>
          ) : null}
          {updated ? (
            <p className="mt-4 text-sm text-stone-400">Last updated: {updated}</p>
          ) : null}
        </div>
      </section>

      <section className="py-14">
        <div className="container-x max-w-3xl">
          <div className="policy-prose space-y-8 text-stone-700 leading-relaxed">
            {children}
          </div>

          <div className="mt-12 rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
            <p className="text-sm text-stone-600">
              Have a question about this policy?{" "}
              <Link href="/contact" className="font-semibold text-brand-700 underline">
                Get in touch
              </Link>{" "}
              and our team will be glad to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// A titled section block for use inside PolicyPage.
export function PolicySection({ heading, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-stone-900">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}
