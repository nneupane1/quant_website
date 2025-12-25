'use client';

import { useEffect, useState } from 'react';

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
    <div className="inline-flex items-center gap-3 rounded-full border border-neon-cyan/30 bg-white/5 px-6 py-3 shadow-[0_12px_30px_rgba(0,255,255,0.12)]">
      <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-neon-cyan/70">
        Website Visits
      </span>
      <span className="text-xl sm:text-2xl font-semibold text-neon-blue">
        {count ?? '—'}
      </span>
    </div>
  );
};
