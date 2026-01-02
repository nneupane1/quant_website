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
      <div className="absolute left-2 sm:left-3 top-2 sm:top-1/2 sm:-translate-y-1/2">
        <span className="text-[9px] sm:text-[10px] text-neon-cyan/80 tracking-[0.18em] uppercase">
          {visitCount ?? '—'} Visits
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="-ml-1 sm:-ml-2 flex items-center hover:opacity-80 transition">
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

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-200 hover:text-neon-cyan transition" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="md:hidden border-t border-dark-border/60 bg-black/20 px-4 pb-3 pt-2">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.7rem] tracking-wide">
          <Link href="/" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
            Home
          </Link>
          <Link href="/about" className="nav-pop text-gray-300 hover:text-neon-cyan font-semibold">
            About
          </Link>
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
    </nav>
  );
};
