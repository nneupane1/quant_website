'use client';

import React from 'react';

export default function Error({ error, reset }) {
  React.useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-3xl font-bold mb-2 neon-glow">Something went wrong</h2>
          <p className="text-gray-400 mb-6">
            An unexpected error occurred. Please try again.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 w-full"
        >
          Try Again
        </button>

        <a
          href="/"
          className="block mt-4 px-6 py-3 glass neon-border text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
