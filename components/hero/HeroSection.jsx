'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const elements = containerRef.current.querySelectorAll('[data-glow]');
      elements.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        const elX = elRect.left - rect.left + elRect.width / 2;
        const elY = elRect.top - rect.top + elRect.height / 2;
        const distance = Math.sqrt(Math.pow(x - elX, 2) + Math.pow(y - elY, 2));
        const opacity = Math.max(0, 1 - distance / 300);
        el.style.setProperty('--glow-opacity', opacity.toString());
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg py-20 md:py-0"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg to-dark-bg" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />

      {/* Hero Logo */}
      <div className="absolute left-6 sm:left-10 lg:left-16 top-28 sm:top-32 lg:top-36 z-10">
        <div className="relative flex items-center justify-center">
          <span className="absolute -inset-10 rounded-full bg-gradient-to-br from-neon-green/25 via-neon-cyan/20 to-neon-pink/25 blur-3xl" />
          <Image
            src="/logos/quantfund-logo.jpg"
            alt="QuantFund AI logo"
            width={320}
            height={320}
            priority
            className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 object-contain mix-blend-screen"
            style={{
              filter:
                'drop-shadow(0 0 24px rgba(78,242,255,0.55)) drop-shadow(0 0 30px rgba(61,255,182,0.4)) drop-shadow(0 0 36px rgba(255,79,216,0.35))',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          data-glow
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass neon-border rounded-full text-sm font-medium"
        >
          <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          Institutional Trading Stack
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block mb-2">Quantitative</span>
          <span className="gradient-text block text-5xl md:text-6xl lg:text-8xl font-black">Trading</span>
          <span className="block mt-2">Reimagined</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Institutional-grade research, simulation, and live execution stack for multi-asset swing & breakout models. SMC + ML confluence with deterministic risk management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Now
          </button>
          <button className="px-8 py-4 glass neon-border text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-dark-border">
          {[
            { label: 'Years of Data', value: '8+' },
            { label: 'Multi-Asset', value: 'Equities, Crypto, Forex' },
            { label: 'Models', value: 'Entry + Risk + Execution' },
            { label: 'Dashboards', value: '5 Real-Time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-neon-blue mb-2">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
