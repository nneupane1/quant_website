'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-cyan animate-spin">
            <div className="w-12 h-12 rounded-full border-2 border-transparent border-b-neon-pink border-l-neon-purple animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2 neon-glow">QuantFund AI</h2>
        <p className="text-gray-400">Loading institutional-grade trading platform...</p>
        
        {/* Animated dots */}
        <div className="mt-4 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
