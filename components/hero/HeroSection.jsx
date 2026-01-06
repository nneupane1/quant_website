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
      className="relative w-full min-h-screen flex items-start justify-center overflow-hidden bg-dark-bg pt-32 sm:pt-[clamp(12rem,18vw,28rem)] pb-12 md:pb-16"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 hero-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="-translate-y-16 sm:translate-y-0">
          {/* Badge */}
          <div
            data-glow
            className="inline-flex items-center gap-2 px-1 py-0.5 sm:px-4 sm:py-2 mb-6 mt-5 sm:mt-8 glass neon-border rounded-full text-[0.42rem] sm:text-sm font-medium animate-float-x"
          >
            <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="font-bold text-white">
              <span>ALGORITHMIC</span>
              <span className="ml-2">TRADING</span>
              <span className="ml-2">STACK</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[1.125rem] md:text-[1.5rem] lg:text-[2.25rem] font-bold mt-8 sm:mt-4 mb-8 animate-fade-in leading-tight -translate-y-12 sm:translate-y-0">
            <span className="block">Quantitative</span>
            <span className="gradient-text block text-[1.5rem] md:text-[1.875rem] lg:text-[3rem] font-black">Trading</span>
            <span className="block">Reimagined</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[0.6rem] md:text-[0.72rem] lg:text-[0.8rem] font-semibold text-gray-300 max-w-4xl mx-auto mt-4 mb-10 leading-relaxed sm:leading-normal">
            <span className="block">
              <span className="text-neon-cyan">•</span>
              <span className="ml-2">Research &amp; Signal Intelligence</span>
              <span className="mx-3 text-neon-cyan">•</span>
              <span>Machine Learning Confluence Ranking</span>
            </span>
            <span className="block">
              <span className="text-neon-cyan">•</span>
              <span className="ml-2">Deterministic Risk &amp; Execution Framework</span>
              <span className="mx-3 text-neon-cyan">•</span>
              <span>Precision Filtering &amp; Scoring</span>
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center mt-4 sm:mt-8 mb-8">
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-[#051015] font-semibold tracking-[0.2em] uppercase text-[0.7rem] shadow-[0_12px_36px_rgba(0,212,255,0.35)] hover:shadow-[0_18px_50px_rgba(139,92,255,0.4)] transition-all duration-300 transform hover:scale-[1.03]"
          >
            Learn More
          </button>
          <a
            href="/about"
            className="px-9 py-4 rounded-full border border-neon-cyan/50 text-neon-cyan font-semibold tracking-[0.2em] uppercase text-[0.7rem] bg-white/5 shadow-[0_0_24px_rgba(78,242,255,0.2)] hover:bg-neon-cyan/10 hover:shadow-[0_0_34px_rgba(78,242,255,0.35)] transition-all duration-300 inline-flex items-center justify-center"
          >
            Explore Now
          </a>
        </div>

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
