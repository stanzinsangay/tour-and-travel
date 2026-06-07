"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand-700 text-white font-display font-extrabold text-lg shadow-md group-hover:scale-105 transition">
            O
          </span>
          <span className="leading-tight">
            <span className="block font-display font-extrabold text-brand-900 text-lg tracking-tight">
              {site.shortName}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 -mt-0.5">
              Tour &amp; Travel
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "text-brand-700 bg-brand-50"
                    : "text-stone-600 hover:text-brand-700 hover:bg-stone-50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-saffron-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-saffron-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-stone-700 hover:bg-stone-100"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white">
          <div className="container-x py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 rounded-lg text-stone-700 font-medium hover:bg-stone-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-1 text-center rounded-lg bg-saffron-500 px-4 py-3 font-semibold text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
