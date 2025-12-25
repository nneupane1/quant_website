'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'quantfund_visit_count';

export const VisitCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const current = Number.parseInt(window.localStorage.getItem(STORAGE_KEY) || '0', 10);
      const next = Number.isFinite(current) ? current + 1 : 1;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      setCount(next);
    } catch {
      setCount(1);
    }
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass neon-border rounded-2xl px-8 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70 mb-3">Website Visits</p>
          <p className="text-5xl md:text-6xl font-bold text-neon-blue">
            {count ?? '—'}
          </p>
          <p className="text-gray-300 mt-4">
            Updates on every visit from this browser.
          </p>
        </div>
      </div>
    </section>
  );
};
