import Link from "next/link";
import { site, navLinks } from "@/data/site";
import { tours } from "@/data/tours";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-stone-300">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand-600 text-white font-display font-extrabold text-lg">
              O
            </span>
            <span className="font-display font-extrabold text-white text-lg">
              {site.shortName}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-400">
            {site.tagline}. Local experts crafting tailor-made journeys across
            Leh, Nubra, Pangong and the high Himalaya.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              ["Instagram", site.social.instagram],
              ["Facebook", site.social.facebook],
              ["YouTube", site.social.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/booking" className="hover:text-white transition">
                Book a Tour
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular tours */}
        <div>
          <h4 className="text-white font-semibold mb-4">Popular Tours</h4>
          <ul className="space-y-2.5 text-sm">
            {tours.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/tours/${t.slug}`}
                  className="hover:text-white transition"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="text-stone-500">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made with ssdesign 🏔️</p>
        </div>
      </div>
    </footer>
  );
}
