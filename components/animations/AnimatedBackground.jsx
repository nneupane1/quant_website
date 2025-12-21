'use client';

import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"
        style={{
          top: `${mousePosition.y - 12}%`,
          left: `${mousePosition.x - 12}%`,
          transition: 'all 0.1s ease-out',
        }}
      />
      <div
        className="absolute w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-10"
        style={{
          bottom: `${mousePosition.y - 12}%`,
          right: `${mousePosition.x - 12}%`,
          transition: 'all 0.15s ease-out',
        }}
      />
    </div>
  );
};
