import Link from "next/link";
import { site } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About Us",
  description:
    "OTSAL Tour & Travel is a locally-owned Ladakh travel company based in Leh, crafting safe, authentic and tailor-made Himalayan journeys since 2013.",
};

const values = [
  { icon: "🤝", title: "Local & responsible", text: "We employ Ladakhi guides, drivers and homestays, keeping tourism rupees in the community." },
  { icon: "🌱", title: "Leave-no-trace", text: "Low-impact travel, plastic-free practices and respect for fragile high-altitude ecosystems." },
  { icon: "❤️", title: "Guest-first", text: "Small groups, honest pricing and round-the-clock support — you're family on the road." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-900 text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-saffron-400">
            About
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">
            We are OTSAL — your local Ladakh experts
          </h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            Born in Leh, raised among these mountains. Since 2013 we've guided
            thousands of travellers safely across Ladakh's passes, lakes and
            monasteries.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.pinimg.com/736x/3c/02/66/3c02661941fa0bd003989d7bf652a1f3.jpg"
              alt="Ladakh landscape"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="From a small Leh office to Ladakh's trusted name" />
            <div className="mt-5 space-y-4 text-stone-600 leading-relaxed">
              <p>
                OTSAL Tour & Travel began with a single jeep and a simple belief:
                that the best way to experience Ladakh is with someone who truly
                belongs here. What started as guiding friends-of-friends grew,
                trip by trip, into one of Leh's most loved travel companies.
              </p>
              <p>
                Today our team of local drivers, mountain guides and trek crews
                runs everything from gentle family circuits to high-altitude bike
                expeditions and remote Changthang journeys — always with safety,
                honesty and warmth at the core.
              </p>
              <p>
                We're not a faceless online aggregator. When you book with OTSAL,
                you're talking to people who live in Leh, who'll meet you at the
                airport, and who'll be a phone call away the entire trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-16">
        <div className="container-x">
          <SectionHeading center eyebrow="What we stand for" title="Our values" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-7 ring-1 ring-stone-200/70 text-center shadow-sm">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-stone-900">{v.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
          {site.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-brand-50 p-6 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-800">{s.value}</p>
              <p className="mt-1 text-sm text-stone-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-16 text-center text-white">
        <div className="container-x">
          <h2 className="font-display text-3xl font-extrabold">Let's plan your Ladakh adventure</h2>
          <p className="mx-auto mt-3 max-w-xl text-stone-300">
            Tell us what you're dreaming of — we'll make it happen.
          </p>
          <Link
            href="/booking"
            className="mt-7 inline-block rounded-xl bg-saffron-500 px-8 py-3.5 font-semibold text-white shadow-lg hover:bg-saffron-600 transition"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
