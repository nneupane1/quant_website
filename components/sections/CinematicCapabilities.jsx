import React from 'react';

const cards = [
  {
    title: 'Market Structure & SMC',
    subtitle: 'Swing highs/lows, BOS, CHoCH, OB',
    cta: 'Open Dashboard',
    visual: 'candles',
    glow: 'from-neon-green/25 via-neon-blue/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Machine Learning Engine',
    subtitle: 'Model fusion, feature ranking, calibration',
    cta: 'Open Dashboard',
    visual: 'network',
    glow: 'from-neon-cyan/25 via-neon-purple/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Live Signal Scanner',
    subtitle: 'Real-time confluence and cross-asset alerts',
    cta: 'Open Dashboard',
    visual: 'scanner',
    glow: 'from-neon-blue/25 via-neon-cyan/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Indicator Heatmap',
    subtitle: 'EMA, MACD, ATR, VWAP overlays',
    cta: 'Open Dashboard',
    visual: 'heatmap',
    glow: 'from-neon-pink/20 via-neon-blue/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Monte Carlo Simulator',
    subtitle: 'Equity forecasts and drawdown stress tests',
    cta: 'Open Dashboard',
    visual: 'montecarlo',
    glow: 'from-neon-purple/20 via-neon-cyan/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'HMM Regime Detector',
    subtitle: 'Probabilistic trend and state transitions',
    cta: 'Open Dashboard',
    visual: 'hmm',
    glow: 'from-neon-blue/25 via-neon-green/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Exposure & Capital Tracker',
    subtitle: 'VaR allocation and risk guardrails',
    cta: 'Open Dashboard',
    visual: 'exposure',
    glow: 'from-neon-purple/25 via-neon-pink/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'ML Feature Insights',
    subtitle: 'Feature importance and drift monitoring',
    cta: 'Open Dashboard',
    visual: 'bars',
    glow: 'from-neon-cyan/25 via-neon-blue/10 to-transparent',
    tone: 'text-neon-cyan',
  },
  {
    title: 'Trader Psychology & KPIs',
    subtitle: 'Behavioral tracking and performance score',
    cta: 'Open Dashboard',
    visual: 'psychology',
    glow: 'from-neon-pink/25 via-neon-purple/10 to-transparent',
    tone: 'text-neon-cyan',
  },
];

const VisualFrame = ({ children, glow }) => (
  <div
    className={`relative h-36 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br ${glow}`}
  >
    <div className="absolute inset-0 grid-veil opacity-40" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(78,242,255,0.22),transparent_55%)] animate-halo-pulse" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,79,216,0.2),transparent_60%)]" />
    <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40 animate-scan-sweep" />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]" />
    <div className="relative z-10 h-full w-full p-4">{children}</div>
  </div>
);

const renderVisual = (type) => {
  switch (type) {
    case 'candles':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-green/80">
          {[20, 50, 80, 110, 140, 170].map((x, i) => (
            <g key={x} stroke="currentColor" strokeWidth="2">
              <line x1={x} y1={20 + i * 2} x2={x} y2={80 - i * 3} />
              <rect
                x={x - 6}
                y={35 + i * 2}
                width="12"
                height={30 - i}
                fill="currentColor"
                opacity="0.6"
                rx="2"
              />
            </g>
          ))}
        </svg>
      );
    case 'network':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-cyan/80">
          <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8">
            <circle cx="45" cy="30" r="12" />
            <circle cx="90" cy="50" r="16" />
            <circle cx="140" cy="28" r="10" />
            <circle cx="155" cy="72" r="13" />
            <circle cx="70" cy="75" r="10" />
            <line x1="57" y1="38" x2="78" y2="46" />
            <line x1="102" y1="52" x2="130" y2="36" />
            <line x1="102" y1="62" x2="145" y2="72" />
            <line x1="78" y1="58" x2="70" y2="72" />
          </g>
          <g fill="currentColor">
            <circle cx="45" cy="30" r="4" />
            <circle cx="90" cy="50" r="4" />
            <circle cx="140" cy="28" r="4" />
            <circle cx="155" cy="72" r="4" />
            <circle cx="70" cy="75" r="4" />
          </g>
        </svg>
      );
    case 'scanner':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-cyan/80">
          <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8">
            <circle cx="100" cy="50" r="32" />
            <circle cx="100" cy="50" r="20" />
            <circle cx="100" cy="50" r="8" />
            <line x1="100" y1="50" x2="150" y2="20" />
            <line x1="100" y1="50" x2="55" y2="70" />
          </g>
          <circle cx="140" cy="28" r="4" fill="currentColor" />
          <circle cx="70" cy="66" r="3" fill="currentColor" />
        </svg>
      );
    case 'heatmap':
      return (
        <div className="grid grid-cols-8 gap-1 h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="rounded-sm"
              style={{
                backgroundColor: `rgba(${20 + (i % 8) * 20}, ${180 - (i % 5) * 20}, ${
                  200 - (i % 4) * 30
                }, 0.7)`,
              }}
            />
          ))}
        </div>
      );
    case 'montecarlo':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-purple/80">
          {[0, 1, 2].map((line) => (
            <path
              key={line}
              d={`M0 ${70 - line * 6} L40 ${60 - line * 4} L80 ${62 - line * 2} L120 ${
                48 - line * 4
              } L160 ${42 - line * 6} L200 ${35 - line * 8}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity={0.5 + line * 0.2}
            />
          ))}
        </svg>
      );
    case 'hmm':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-blue/80">
          {[20, 45, 70, 95, 120, 145, 170].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={60 - i * 4}
              width="12"
              height={30 + i * 3}
              fill="currentColor"
              opacity="0.6"
              rx="2"
            />
          ))}
        </svg>
      );
    case 'exposure':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-pink/80">
          <path
            d="M0 80 L40 72 L80 70 L120 60 L160 52 L200 40 L200 100 L0 100 Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M0 80 L40 72 L80 70 L120 60 L160 52 L200 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case 'bars':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-cyan/80">
          {[20, 45, 70, 95, 120, 145, 170].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={70 - i * 4}
              width="12"
              height={28 + i * 4}
              fill="currentColor"
              opacity="0.6"
              rx="2"
            />
          ))}
        </svg>
      );
    case 'psychology':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-full text-neon-purple/80">
          <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8">
            <path d="M80 80 C50 72 42 30 80 26 C120 20 148 48 130 76 C122 90 100 92 80 80 Z" />
            <path d="M100 36 C118 36 130 48 130 62" />
          </g>
          <g fill="currentColor" opacity="0.7">
            <circle cx="92" cy="50" r="4" />
            <circle cx="112" cy="54" r="3" />
            <circle cx="98" cy="64" r="3" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export const CinematicCapabilities = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan/70 mb-3">
            Research Dashboards
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
            Institutional Modules
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A cinematic grid of the internal labs powering QuantFund AI - crafted for clarity, depth,
            and executive-level storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative glass neon-border rounded-2xl p-6 min-h-[360px] flex flex-col gap-4 overflow-hidden hover:border-neon-cyan transition-all duration-300"
              style={{ animation: `fadeIn 0.5s ease-out ${index * 0.08}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/10 group-hover:to-neon-pink/10 transition-all duration-300" />
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-gray-500">
                  <span>Module</span>
                  <span className="text-neon-blue/70">QF-AI</span>
                </div>
                <VisualFrame glow={card.glow}>{renderVisual(card.visual)}</VisualFrame>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-2 ${card.tone}`}>{card.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{card.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neon-blue group-hover:text-neon-cyan transition-colors">
                    {card.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
