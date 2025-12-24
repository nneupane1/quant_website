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
            <img
              src="/images/bull_bear.png"
              alt="Bull and bear motif"
              className="w-full rounded-2xl mb-6 object-cover object-top"
              style={{ clipPath: 'inset(0 0 15% 0)' }}
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neon-blue">About QuantFund AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A forensic-level quant lab that unifies institutional-grade research, simulation, and live execution.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Vision */}
            <section className="glass neon-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-neon-pink">Our Vision</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  QuantFund AI is designed as a unified computational framework where research, model development, and live execution operate on a shared data and feature lineage. All tick and bar inputs are processed through a zero-latency, streaming transformation graph, incorporating time-aligned resampling, session encoding, volatility-normalized ATR scaling, and SMC-derived structural annotations.
                </p>
                <p>
                  The analytical pipeline integrates heterogeneous feature classes: candle-geometry tensors, VWAP/Bollinger curvature metrics, MACD momentum derivatives, liquidity-distance embeddings, regime-state classifiers, and ML-generated microstructure proxies. These features populate both the online feature store and the historical backtest/forward-test engines, ensuring strict equivalence between offline research and online inference.
                </p>
                <p>
                  All components &mdash; the backtester, the simulator, the dashboard analytics, and the live scanner &mdash; draw from this identical computational graph, eliminating divergence between research and real-time execution. When the system issues an execution candidate, it includes a fully structured reasoning vector: structural bias probabilities, retest classification, wick-flow dominance, liquidity gradient scores, volatility-regime likelihoods, risk-adjusted expectancy, and macro guardrail evaluations.
                </p>
                <p>
                  The result is an institutional-grade, end-to-end ML architecture built for reliability, determinism, and adaptive response in dynamic markets. A platform where AI, market microstructure, and statistical modeling converge into a single reproducible pipeline, and where execution decisions are informed by the same models that shaped the research.
                </p>
              </div>
            </section>

            {/* Core Pillars */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-neon-pink">Core Pillars</h2>
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
                    description: 'Adaptive floors, VaR allocation, Monte Carlo cones, and Hidden Markov Model regimes for complete risk management',
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
              <h2 className="text-3xl font-bold mb-6 text-neon-pink">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Python',
                  'NumPy / Pandas',
                  'statsmodels',
                  'FastAPI',
                  'PostgreSQL',
                  'streamlit',
                  'TensorFlow / scikit-learn',
                  'MLflow',
                  'HuggingFace / LLM Tooling',
                  'Next.js',
                  'TailwindCSS',
                  'WebSockets',
                  'Docker',
                  'Kubernetes',
                  'Prometheus & Grafana',
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
              <p className="text-gray-300 leading-relaxed mb-6">
                QuantFund AI is built on the principle that <strong>alpha must be engineered, not hoped for</strong>. Every subsystem&mdash;research, simulation, risk, and execution&mdash;operates on a unified mathematical blueprint governed by a single{' '}
                <span className="px-2 py-1 rounded bg-white/10 font-mono text-sm text-gray-100">ParameterRegistry</span>. This registry acts as the system&apos;s global parameter vector{' '}
                <span className="px-2 py-1 rounded bg-white/10 font-mono text-sm text-gray-100">&Theta;</span>, defining confluence weights, volatility-regime thresholds, ATR scaling windows, ML blend coefficients, and macro-guardrail constraints. Any update to{' '}
                <span className="px-2 py-1 rounded bg-white/10 font-mono text-sm text-gray-100">&Theta;</span> propagates instantly across the entire architecture, ensuring perfect alignment between offline research and real-time execution.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                In this framework, each component <em>S</em>
                <sub>i</sub> behaves as a deterministic function
              </p>
              <div className="text-center text-2xl md:text-3xl font-semibold text-gray-100 my-6 font-serif italic">
                <span>
                  S<sub>i</sub> = f<sub>i</sub>(X, &Theta;),
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                where <em>X</em> represents the standardized feature graph. This creates <strong>parameter invariance</strong> across backtests, forward tests, dashboards, and live inference&mdash;eliminating drift, ambiguity, and hidden state divergence. When the system surfaces an execution candidate, it does so with a fully structured reasoning vector grounded in the same parameters that defined the research: structural-bias probabilities, regime likelihoods, liquidity gradients, volatility diagnostics, risk-adjusted expectancy, and macro-guardrail evaluations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Layered on top of this deterministic core is an <strong>agentic research cycle</strong>. Autonomous routines can recalibrate thresholds, evaluate new feature sets, or adjust ML fusion parameters, with each change instantly reflected across the backtester, live scanner, and risk engine. This continuous feedback loop transforms the architecture into a self-improving system&mdash;an AI that not only executes but learns, audits, and evolves its own decision framework.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2">The philosophy is simple:</p>
              <p className="text-gray-100 leading-relaxed font-semibold mb-4">
                coherence over chaos, determinism over drift, structure over superstition.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Markets may shift without warning, but the system&apos;s foundation remains invariant, transparent, and mathematically traceable. In this environment, uncertainty belongs to the market&mdash;not to the models that trade it.
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
