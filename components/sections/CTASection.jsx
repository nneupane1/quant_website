'use client';

import React from 'react';

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-pink/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Trading?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join institutional traders using QuantFund AI. Institutional-grade analysis, deterministic signals, and production-ready dashboards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105">
            Access Platform
          </button>
          
          <a
            href="#contact"
            className="px-8 py-4 glass neon-border text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 pt-8 border-t border-dark-border">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full" />
            8+ Years of Data
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full" />
            Production-Grade
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full" />
            Institutional Standard
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full" />
            24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
};
