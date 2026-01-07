'use client';

import Link from 'next/link';
export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#07090d]/95 via-[#0b111a]/85 to-[#07090d]/95 border-b border-white/5 backdrop-blur-2xl overflow-visible shadow-[0_20px_80px_rgba(0,212,255,0.16)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent opacity-70" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group mx-auto md:mx-0 md:-ml-2 flex items-center hover:opacity-90 transition">
          <span className="inline-flex animate-logo-drift">
            <span className="inline-flex text-[0.9rem] sm:text-[1.125rem] font-semibold tracking-[0.08em] text-[#AAB6C5] transition-transform transition-colors duration-300 group-hover:text-neon-blue group-hover:scale-125 group-hover:drop-shadow-[0_0_14px_rgba(78,242,255,0.55)]">
              QuantFund AI<span className="text-[#AAB6C5] group-hover:text-neon-blue">x</span>
              <span className="text-[#AAB6C5] group-hover:text-neon-blue">Nischal</span>
            </span>
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            Home
          </Link>
          <Link href="/about" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            About
          </Link>
          <Link href="/research" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            Research
          </Link>
          <Link href="/engine" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            Live Trading
          </Link>
          <Link href="/insights" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            Insights
          </Link>
          <Link href="/careers" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan text-sm font-medium tracking-wide">
            Careers
          </Link>
          <Link
            href="/#contact"
            className="rounded-full px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-slate-900 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple shadow-[0_10px_30px_rgba(0,212,255,0.35)] hover:shadow-[0_16px_40px_rgba(139,92,255,0.35)] transition-all"
          >
            Contact
          </Link>
        </div>

      </div>

      <div className="md:hidden border-t border-dark-border/60 bg-black/20 px-4 pb-3 pt-2">
        <div className="flex items-center justify-center gap-6 text-[0.72rem] tracking-wide">
          <Link href="/" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold uppercase tracking-[0.18em]">
            Home
          </Link>
          <Link href="/about" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold uppercase tracking-[0.18em]">
            About
          </Link>
          <details className="relative">
            <summary className="nav-pop text-neon-cyan font-semibold cursor-pointer list-none px-4 py-1.5 rounded-full bg-white/5 border border-neon-cyan/40 shadow-[0_0_16px_rgba(78,242,255,0.3)] hover:shadow-[0_0_26px_rgba(78,242,255,0.5)] transition-all flex items-center gap-2">
              More
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 rounded-xl bg-[#0b111a]/90 border border-neon-cyan/30 p-3 text-center shadow-[0_0_28px_rgba(0,212,255,0.3)] backdrop-blur-xl">
              <div className="flex flex-col gap-2 text-[0.72rem]">
                <Link href="/research" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold">
                  Research
                </Link>
                <Link href="/engine" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold">
                  Live Trading
                </Link>
                <Link href="/insights" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold">
                  Insights
                </Link>
                <Link href="/careers" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold">
                  Careers
                </Link>
                <Link href="/#contact" className="nav-pop text-[#AAB6C5] hover:text-neon-cyan font-semibold">
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
