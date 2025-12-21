'use client';

import { useEffect, useState } from 'react';

export const LoadingScreen = ({ isLoading = false }) => {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
    setShow(true);
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-dark-bg/80 backdrop-blur flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-transparent border-t-neon-blue border-r-neon-cyan rounded-full animate-spin" />
          <div className="absolute inset-0 border-2 border-transparent border-b-neon-pink rounded-full animate-spin animation-delay-200" />
        </div>
        <p className="text-sm text-gray-400 font-medium">Loading...</p>
      </div>
    </div>
  );
};
