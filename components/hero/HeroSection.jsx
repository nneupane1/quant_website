'use client';

import React, { useEffect, useRef } from 'react';

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
      className="relative w-full min-h-screen flex items-start justify-center overflow-hidden bg-dark-bg pt-10 pb-10 md:pt-14 md:pb-12"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 hero-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          data-glow
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass neon-border rounded-full text-sm font-medium"
        >
          <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          <span className="font-bold text-white">ALGORITHMIC TRADING STACK</span>
        </div>

        {/* Main Title */}
        <h1 className="text-[2.025rem] md:text-[2.7rem] lg:text-[4.05rem] font-bold mb-6 animate-fade-in leading-tight">
          <span className="block">Quantitative</span>
          <span className="gradient-text block text-[2.7rem] md:text-[3.375rem] lg:text-[5.4rem] font-black">Trading</span>
          <span className="block">Reimagined</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Institutional-grade research, simulation, and live execution stack for multi-asset swing & breakout models. SMC + ML confluence with deterministic risk management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
        <p className="script-text text-4xl sm:text-5xl lg:text-6xl font-bold text-neon-pink/80 mt-6">
          Regime shifts don&apos;t warn you, our models do ...
        </p>

        {/* Stats */}
        {/* Stats removed per request */}
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
