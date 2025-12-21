'use client';

import { useEffect, useState } from 'react';

export const usePrefersDarkMode = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark for quant aesthetic

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDark;
};
