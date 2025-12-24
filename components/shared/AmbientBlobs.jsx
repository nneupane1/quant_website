'use client';

import React from 'react';

export const AmbientBlobs = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -top-24 left-[-6%] h-64 w-64 rounded-full bg-neon-blue/10 blur-3xl animate-blob-flicker"
        style={{ animationDelay: '0s', animationDuration: '24s' }}
      />
      <div
        className="absolute top-24 right-[-8%] h-72 w-72 rounded-full bg-neon-pink/10 blur-3xl animate-blob-flicker"
        style={{ animationDelay: '2s', animationDuration: '26s' }}
      />
      <div
        className="absolute bottom-[-8%] left-[20%] h-80 w-80 rounded-full bg-neon-green/10 blur-3xl animate-blob-flicker"
        style={{ animationDelay: '4s', animationDuration: '28s' }}
      />
      <div
        className="absolute bottom-[-10%] right-[10%] h-72 w-72 rounded-full bg-neon-purple/10 blur-3xl animate-blob-flicker"
        style={{ animationDelay: '6s', animationDuration: '30s' }}
      />
    </div>
  );
};
