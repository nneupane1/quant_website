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
    <div className="inline-flex items-center rounded-full border border-neon-cyan/60 bg-neon-blue/10 px-4 py-2 shadow-[0_10px_24px_rgba(0,255,255,0.18)]">
      <span className="text-xs sm:text-sm font-semibold text-neon-cyan">
        {count ?? '—'} Visits
      </span>
    </div>
  );
};
