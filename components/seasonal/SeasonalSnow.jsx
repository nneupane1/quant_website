'use client';

import { useEffect, useRef, useState } from 'react';

const SEASONAL_START = new Date('2025-12-26T00:00:00');
const SEASONAL_END = new Date('2025-12-29T00:00:00');

export const SeasonalSnow = () => {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now >= SEASONAL_START && now <= SEASONAL_END) {
      setActive(true);
    }
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let flakes = [];
    let animationFrameId = 0;

    const createFlakes = () => {
      const count = Math.min(220, Math.max(120, Math.floor(width / 6)));
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        speed: Math.random() * 1.6 + 0.4,
        drift: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.5 + 0.4,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createFlakes();
    };

    const update = () => {
      flakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += flake.drift;
        flake.drift += (Math.random() - 0.5) * 0.03;
        if (flake.drift > 0.6) flake.drift = 0.6;
        if (flake.drift < -0.6) flake.drift = -0.6;

        if (flake.y > height + 6) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }

        if (flake.x > width + 6) flake.x = -6;
        if (flake.x < -6) flake.x = width + 6;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.fillStyle = '#ffffff';
      flakes.forEach((flake) => {
        ctx.globalAlpha = flake.opacity;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    };

    const tick = () => {
      update();
      draw();
      animationFrameId = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <canvas ref={canvasRef} className="h-full w-full" />
      <img
        src="/images/santa.png"
        alt=""
        aria-hidden="true"
        className="absolute left-4 sm:left-8 top-[28%] w-20 sm:w-28 md:w-36 drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] animate-santa-float"
      />
    </div>
  );
};
