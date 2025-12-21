import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { TeamSection } from '@/components/sections/TeamSection';

export const metadata = {
  title: 'About QuantFund AI',
  description: 'Learn about our institutional-grade trading platform',
};

export default function About() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About QuantFund AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A forensic-level quant lab that unifies institutional-grade research, simulation, and live execution.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Vision */}
            <section className="glass neon-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-neon-cyan">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                QuantFund AI is designed for desks that demand one coherent workflow from raw tick data through live execution. Every bar that hits the system is resampled, session-tagged, and passed through ATR-aware SMC logic, candle geometry, VWAP/Bollinger curvature, MACD bias, and ML-derived liquidity signals. The identical pipeline feeds the feature store, the backtester, the dashboards, and the live scanner so a "BUY BTC/USDT" alert carries the full forensic context — SMC retest classification, wick dominance, VWAP distance, regime state, and macro guardrail scores.
              </p>
            </section>

            {/* Core Pillars */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-neon-cyan">Core Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Data + Features',
                    description: 'Institutional resampling, ATR-aware SMC structure, candle analytics, and AI-derived liquidity scores',
                  },
                  {
                    title: 'Machine Learning',
                    description: 'Deterministic confluence fused with calibrated ML predictors, schema-driven and retrainable',
                  },
                  {
                    title: 'Risk & Simulation',
                    description: 'Adaptive floors, VaR allocation, Monte Carlo cones, and HMM regimes for complete risk management',
                  },
                  {
                    title: 'Execution',
                    description: 'Live scanner, automated trading, cinematic dashboards, and forensic logging',
                  },
                ].map((pillar, i) => (
                  <div key={i} className="glass neon-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon-blue">{pillar.title}</h3>
                    <p className="text-gray-400">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section className="glass neon-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-neon-cyan">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Python',
                  'React',
                  'Next.js',
                  'PostgreSQL',
                  'Redis',
                  'Streamlit',
                  'TensorFlow',
                  'scikit-learn',
                  'Docker',
                  'Kubernetes',
                  'AWS',
                  'Airflow',
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 glass neon-border rounded-lg text-center text-sm font-medium text-neon-blue"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* Philosophy */}
            <section className="glass neon-border-pink rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-neon-pink">Our Philosophy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every subsystem is wired through ParameterRegistry, so the same YAML blueprint drives backtests, live scans, dashboards, and automation. This allows quant researchers to retune confluence weights, ML blend factors, or ATR regime windows directly in configuration; the backtester, live scanner, RiskManager, and dashboards immediately inherit the change.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This design ensures reproducibility, fast iteration, and statistically rigorous experiments without touching code, keeping the alpha pipeline deterministic and traceable.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <TeamSection />

      <Footer />
    </main>
  );
}
