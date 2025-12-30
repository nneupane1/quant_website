import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { TeamSection } from '@/components/sections/TeamSection';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'About QuantFund AI',
  description: 'Learn about our institutional-grade trading platform',
};

export default function About() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="relative pt-16 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="w-full rounded-[48px] overflow-hidden -mt-10 mb-4">
              <img
                src="/images/bull_bear1.png"
                alt="Bull and bear motif"
                className="w-full object-cover object-center"
                style={{ clipPath: 'inset(12% 10% 12% 10% round 48px)' }}
              />
            </div>
            <div className="relative mb-4 h-4 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent blur-md animate-light-sweep" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent opacity-70 animate-light-sweep delay-[1.5s]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-neon-blue text-[2.55rem] md:text-[3.2rem] block">About QuantFund AI</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mx-auto">
              A forensic-level quant lab that unifies institutional-grade research, simulation, and live execution.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Vision */}
            <section className="group relative glass neon-border rounded-xl p-8 hover:border-neon-cyan transition-all duration-300 hover:translate-y-[-4px] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 transition-all duration-300 group-hover:from-neon-blue/10 group-hover:to-neon-pink/5" />
              <div className="relative z-10">
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
              </div>
            </section>

            {/* Core Pillars */}
            <section className="glass neon-border rounded-xl p-8">
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

            <section className="glass neon-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-neon-pink">What QuantFund AI Is Not</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  QuantFund AI is not a hedge fund, not a brokerage, and not a trading-signal service. It is a closed, high-fidelity research engine&mdash;an internal laboratory where models, risk systems, and execution algorithms are developed without the structural, legal, or operational obligations associated with managing outside capital. The platform trades only proprietary capital, and every component is designed for depth of intelligence rather than distribution of service. Nothing on this site constitutes financial advice, an offer of investment, or a solicitation of funds.
                </p>
                <p>
                  The system governs a single proprietary capital process <span className="font-mono text-gray-100">C(t)</span>, defined on its natural filtration.
                </p>
              </div>
              <div className="mt-4 space-y-4 text-gray-300 leading-relaxed">
                <div className="text-center text-2xl md:text-3xl font-semibold text-gray-100 my-6 font-serif">
                  F<sub>t</sub> = &sigma;&#123;X(s): s &le; t&#125;
                </div>
                <p>
                  where <span className="font-mono text-gray-100">X(t)</span> represents the live feature-state vector of the market and the model. All decisions arise from one unified stochastic control policy{' '}
                  <span className="font-mono text-gray-100">&pi;: F<sub>t</sub> &rarr; U</span>, yielding a single controlled Ito dynamic:
                </p>
                <div className="text-center text-2xl md:text-3xl font-semibold text-gray-100 my-6 font-serif">
                  dC(t) = &mu;<sub>&pi;</sub>(t) C(t) dt + &sigma;<sub>&pi;</sub>(t) C(t) dW<sub>t</sub>.
                </div>
                <p>
                  No family of external capital processes{' '}
                  <span className="font-mono text-gray-100">&#123;C<sub>i</sub>(t)&#125;<sub>i=1</sub><sup>N</sup></span>, no client-specific policies, no fiduciary risk envelopes, and no regulatory capital partitions exist inside the architecture. The system solves one internal optimization problem,
                </p>
                <div className="text-center text-2xl md:text-3xl font-semibold text-gray-100 my-6 font-serif">
                  max<sub>&pi;</sub> E&#91;U(C(T)) | F<sub>t</sub>&#93;
                </div>
                <p>
                  rather than a multi-agent or multi-allocator control problem. This mathematical structure ensures purity of inference, clarity of risk, and complete legal isolation from activities associated with asset management or portfolio administration for others.
                </p>
                <p>
                  Although QuantFund AI does not accept deposits, manage external portfolios, or operate as a regulated financial entity, its architecture is engineered with a horizon for institutional evolution. The modular risk engines, execution kernels, and ML operators are designed such that, when regulatory pathways and strategic conditions align, the system could expand into a multi-account, regulated framework&mdash;whether through licensing, institutional partnership, or acquisition by a quantitative desk seeking a deterministic ML infrastructure.
                </p>
                <p>
                  Until such a transition is explicitly pursued, QuantFund AI remains a black-box research organism&mdash;a solitary stochastic engine refining its mathematics in-house, trading only personal capital, and preparing for the moment when its engineering maturity and compliance posture justify scaling into a larger institutional role.
                </p>
              </div>
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
