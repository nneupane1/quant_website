'use client';

import { useEffect, useRef, useState } from 'react';

const SEASONAL_START = new Date('2025-12-24T00:00:00');
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
    let hideTimerId = 0;

    const createFlakes = () => {
      const count = Math.min(280, Math.max(160, Math.floor(width / 5)));
      flakes = Array.from({ length: count }, () => {
        const isStar = Math.random() < 0.18;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isStar ? Math.random() * 1.4 + 0.6 : Math.random() * 2.4 + 1,
          speed: Math.random() * 1.8 + 0.5,
          drift: (Math.random() - 0.5) * 0.7,
          opacity: Math.random() * 0.45 + 0.45,
          twinkle: isStar ? Math.random() * 0.5 + 0.5 : 1,
        };
      });
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
      flakes.forEach((flake) => {
        const alpha = flake.opacity * (flake.twinkle + Math.sin((flake.y + flake.x) * 0.002) * 0.15);
        ctx.globalAlpha = Math.max(0.15, Math.min(0.9, alpha));
        ctx.fillStyle = '#ffffff';
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
    hideTimerId = window.setTimeout(() => setActive(false), 20000);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(hideTimerId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <canvas ref={canvasRef} className="h-full w-full" />
      <img
        src="/images/santa2.png"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[14%] w-[700px] sm:w-[800px] md:w-[900px] lg:w-[1000px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] animate-santa-fly"
      />
    </div>
  );
};
