'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-[#05060a] via-[#0b0f14] to-[#05060a] border-b border-dark-border backdrop-blur overflow-visible shadow-[0_20px_60px_rgba(0,212,255,0.12)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="-ml-1 sm:-ml-2 flex items-center hover:opacity-80 transition">
          <span className="text-lg sm:text-xl font-bold text-gray-100 tracking-wide">
            QuantFund AI <span className="text-neon-cyan">x</span>{' '}
            <span className="text-neon-pink">Nischal</span>
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-gray-300 hover:text-neon-cyan transition text-sm font-medium tracking-wide">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-neon-cyan transition text-sm font-medium tracking-wide">
            About
          </Link>
          <Link href="/research" className="text-gray-300 hover:text-neon-cyan transition text-sm font-medium tracking-wide">
            Research
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-neon-cyan transition text-sm font-medium tracking-wide">
            Careers
          </Link>
          <Link href="/#contact" className="button-primary text-xs">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-200 hover:text-neon-cyan transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
