'use client';

import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-40 bg-bg-primary border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition">
          <span className="text-2xl font-bold text-text-primary">QuantFund</span>
          <span className="text-accent font-bold">AI</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-text-primary hover:text-accent transition text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-text-primary hover:text-accent transition text-sm font-medium">
            About
          </Link>
          <Link href="/research" className="text-text-primary hover:text-accent transition text-sm font-medium">
            Research
          </Link>
          <Link href="/careers" className="text-text-primary hover:text-accent transition text-sm font-medium">
            Careers
          </Link>
          <button className="button-primary text-sm">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
