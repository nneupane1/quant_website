import React from 'react';

const cards = [
  {
    title: 'Market Structure & SMC',
    image: '/images/smc.png',
    glow: 'from-neon-green/25 via-neon-blue/10 to-transparent',
  },
  {
    title: 'Machine Learning Engine',
    image: '/images/machine_learning.png',
    glow: 'from-neon-cyan/25 via-neon-purple/10 to-transparent',
  },
  {
    title: 'Live Signal Scanner',
    image: '/images/live_signal_scanner.png',
    glow: 'from-neon-blue/25 via-neon-cyan/10 to-transparent',
  },
  {
    title: 'Indicator Heatmap',
    image: '/images/indicator_heatmap.png',
    glow: 'from-neon-pink/20 via-neon-blue/10 to-transparent',
  },
  {
    title: 'Monte Carlo Simulator',
    image: '/images/monte_carlo_simulator.png',
    glow: 'from-neon-purple/20 via-neon-cyan/10 to-transparent',
  },
  {
    title: 'HMM Regime Detector',
    image: '/images/hmm.png',
    glow: 'from-neon-blue/25 via-neon-green/10 to-transparent',
  },
  {
    title: 'Exposure & Capital Tracker',
    image: '/images/exposure_and_capital_tracker.png',
    glow: 'from-neon-purple/25 via-neon-pink/10 to-transparent',
  },
  {
    title: 'ML Feature Insights',
    image: '/images/machine_learning.png',
    glow: 'from-neon-cyan/25 via-neon-blue/10 to-transparent',
  },
  {
    title: 'Trader Psychology & KPIs',
    image: '/images/trader_psychology.png',
    glow: 'from-neon-pink/25 via-neon-purple/10 to-transparent',
  },
];

const VisualFrame = ({ glow, image, alt }) => (
  <div
    className={`relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#05070b] shadow-[0_0_30px_rgba(0,212,255,0.12)] ${glow}`}
  >
    <img src={image} alt={alt} className="h-full w-full object-contain" />
  </div>
);

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
            A cinematic grid of the internal labs powering QuantFund AI - rendered as direct
            interface snapshots for clarity, depth, and executive-level storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative glass neon-border rounded-2xl p-5 flex flex-col gap-4 overflow-hidden hover:border-neon-cyan transition-all duration-300"
              style={{ animation: `fadeIn 0.5s ease-out ${index * 0.08}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/10 group-hover:to-neon-pink/10 transition-all duration-300" />
              <div className="relative z-10">
                <VisualFrame glow={card.glow} image={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
