'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'quantfund_visit_count';

export const Navigation = () => {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const current = Number.parseInt(window.localStorage.getItem(STORAGE_KEY) || '0', 10);
      const next = Number.isFinite(current) ? current + 1 : 1;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      setVisitCount(next);
    } catch {
      setVisitCount(1);
    }
  }, []);

  return (
    <nav className="relative sticky top-0 z-40 bg-gradient-to-r from-[#05060a] via-[#0b0f14] to-[#05060a] border-b border-dark-border backdrop-blur overflow-visible shadow-[0_20px_60px_rgba(0,212,255,0.12)]">
      <div className="hidden sm:block absolute left-2 sm:left-3 top-1/2 -translate-y-1/2">
        <span className="text-[9px] sm:text-[10px] text-neon-cyan/80 tracking-[0.18em] uppercase">
          {visitCount ?? '—'} Visits
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0">
        {/* Logo */}
        <Link href="/" className="mx-auto md:mx-0 md:-ml-2 flex items-center hover:opacity-80 transition">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            QuantFund AI <span className="text-white">x</span>{' '}
            <span className="text-white">Nischal</span>
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            Home
          </Link>
          <Link href="/about" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            About
          </Link>
          <Link href="/research" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            Research
          </Link>
          <Link href="/engine" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            Live Trading
          </Link>
          <Link href="/insights" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            Insights
          </Link>
          <Link href="/careers" className="nav-pop text-gray-300 hover:text-neon-cyan text-sm font-medium tracking-wide">
            Careers
          </Link>
          <Link href="/#contact" className="button-primary text-xs">
            Contact
          </Link>
        </div>

      </div>

      <div className="md:hidden border-t border-dark-border/60 bg-black/20 px-4 pb-3 pt-2">
        <div className="flex items-center justify-center gap-6 text-[0.72rem] tracking-wide">
          <Link href="/" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
            Home
          </Link>
          <Link href="/about" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
            About
          </Link>
          <details className="relative">
            <summary className="nav-pop text-neon-cyan font-semibold cursor-pointer list-none px-4 py-1.5 rounded-full glass neon-border shadow-[0_0_16px_rgba(78,242,255,0.25)] hover:shadow-[0_0_24px_rgba(78,242,255,0.4)] transition-all flex items-center gap-2">
              More
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 rounded-xl glass neon-border p-3 text-center shadow-[0_0_24px_rgba(0,212,255,0.25)]">
              <div className="flex flex-col gap-2 text-[0.72rem]">
                <Link href="/research" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
                  Research
                </Link>
                <Link href="/engine" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
                  Live Trading
                </Link>
                <Link href="/insights" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
                  Insights
                </Link>
                <Link href="/careers" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
                  Careers
                </Link>
                <Link href="/#contact" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
                  Contact
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};
