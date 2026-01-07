import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Research - QuantFund AI',
  description: 'Deep dive into our trading research and methodologies',
};

export default function Research() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      
      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="w-[79%] sm:w-[63%] mx-auto rounded-[40px] overflow-hidden -mt-10 mb-0">
              <img
                src="/images/quant_engineer.png"
                alt="Quantitative research engineering"
                className="w-full object-contain"
              />
            </div>
            <div className="relative mt-6 mb-10 h-4 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent blur-md animate-light-sweep" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent opacity-70 animate-light-sweep delay-[1.5s]" />
            </div>
            <h1 className="text-[2.15rem] md:text-[2.7rem] font-bold mb-3 text-neon-blue">
              Research Methodologies
            </h1>
            <p className="text-xl text-gray-300">
              Institutional-grade analysis and quantitative methodologies
            </p>
          </div>

          {/* Research Topics */}
          <div className="space-y-8">
            {[
              {
                title: 'Smart Money Concepts in Modern Markets',
                description:
                  'Modern markets are shaped by deep pools of institutional liquidity, and this research dissects those flows with the precision of a forensic microstructure lab. The study maps how algorithmic execution desks generate displacement, how liquidity providers engineer inducement, and how retest structures become battlegrounds for directional commitment. By converting SMC theory into measurable signals -- wick-flow dominance, liquidity-gradient vectors, absorption thresholds, and regime-aligned breaker structures -- the framework exposes the hidden order that governs breakout continuation and failure. It rejects indicator-chasing entirely; only behaviors that survive backtest -> forward-test equivalence and cross-regime validation are traded. Support and resistance become liquidity shelves with quantifiable reaction probabilities, not artistic lines. Across multi-timeframe stacks, the research uncovers how institutions defend zones, how liquidity migrates, and how volatility compresses before expansion. The result is a disciplined quantitative blueprint that rides the same liquidity waves the whales create -- anticipating institutional intent before it materializes in price.',
                tags: ['SMC', 'Order Flow', 'Price Action', 'BOS', 'CHoCH', 'OB'],
                date: 'Dec 2024',
              },
              {
                title: 'Machine Learning for Quantitative Trading',
                description:
                  'This research develops a disciplined ML architecture designed to augment—rather than overshadow—deterministic confluence models used in systematic trading. The pipeline constructs high-fidelity feature spaces from volatility-normalized tensors, curvature derivatives, liquidity-distance embeddings, and session-aware microstructure metrics, each validated through temporal cross-validation to eliminate leakage. Deterministic confluence and ML probabilities are fused through a calibrated scoring operator, where model calibration (including isotonic and Platt scaling variants) ensures that predictive outputs remain probabilistically reliable and cannot destabilize structural logic. MLOps-driven data governance supports complete lineage tracking, model versioning, and reproducible inference across backtest, forward test, and live environments. Parameter evolution is driven by a dual optimization layer: genetic algorithms explore non-linear signal interactions, while Bayesian optimization refines hyperparameters under uncertainty—allowing the system to adapt trading behaviors continuously as new market data arrives. Drift is monitored using divergence statistics, probabilistic residual analysis, and feature-distribution tracking across shifting volatility regimes. The result is a scientifically grounded ML stack where every model is calibrated, every prediction is stress-tested, and every adaptive cycle enhances structural intelligence while maintaining institutional-grade reliability and traceability.',
                tags: ['ML', 'Calibration', 'Feature Engineering', 'Statistical Modeling', 'Genetic Evolution', 'Bayesian Optimization'],
                date: 'Nov 2024',
              },
              {
                title: 'Risk Management at Institutional Scale',
                description:
                  'A multi-layer quantitative risk engine forms the backbone of the system—designed for environments where survival is governed by mathematics, not optimism. Regime-aware volatility models, Hidden Markov state-transition layers, Monte Carlo stress cones, and tail-amplification diagnostics work together to construct a dynamic, adaptive risk envelope around every strategy. Position sizing flows through volatility-normalized allocation rules and adaptive capital floors that ratchet upward with profitability, enforcing structural drawdown limits while allowing unbounded upside drift. Forward-looking risk measures—including scenario-conditioned VaR, Expected Shortfall, and projected drawdown distributions—are derived from stochastic path simulations that incorporate structural breaks, liquidity contractions, and correlation shocks. Execution risk is modeled with slippage surfaces, market-impact estimators, and asymmetric fill-probability curves to ensure that theoretical expectancy matches real-world constraints. Continuous monitoring of distributional drift, volatility clustering, and liquidity microfractures enables the engine to compress exposure during hostile regimes and expand it when conditions stabilize. The result is a mathematically disciplined, institution-grade risk architecture where every position, interval, and execution decision is evaluated against a probabilistic shield engineered for transparency, robustness, and capital preservation.',
                tags: ['Volatility Modeling', 'Value-at-Risk', 'Monte Carlo Simulation', 'Hidden Markov Model'],
                date: 'Oct 2024',
              },
              {
                title: 'Live Trading Architecture',
                description:
                  'A production-grade trading architecture emerges here with the discipline of an execution war room—an orchestrated ecosystem of autonomous services operating under strict time, risk, and reliability constraints. Market data enters through a zero-latency intake layer, where each packet is validated, normalized, and pushed into a feature engine that runs the exact computational graph used in research, enforcing perfect feature parity between backtests and live execution. Distributed workers compute features, evaluate signals, and route orders independently, yet remain synchronized through shared schemas and coordinated clocks. Deterministic signal cycles generate confluence vectors and structural diagnostics that feed a hardened execution router capable of dynamic rerouting in response to slippage, volatility shocks, or microstructure fractures. The infrastructure is built on containerized services, versioned models, rolling deployments, and fault-tolerant orchestration, while every subsystem emits granular telemetry—latency profiles, drift metrics, fill-probability curves, and state transitions—into real-time monitoring dashboards. The resulting architecture behaves like a living machine: redundant, observable, and auditable at every layer, ensuring that execution adheres to strategy logic with absolute fidelity and that reliability is delivered through engineering rigor, not discretionary judgment.',
                tags: ['Architecture', 'Execution Infrastructure', 'MLOps', 'CI/CD/CT', 'AWS', 'Azure'],
                date: 'Sep 2024',
              },
            ].map((paper, i) => {
              const isFeatured =
                paper.title === 'Smart Money Concepts in Modern Markets' ||
                paper.title === 'Machine Learning for Quantitative Trading' ||
                paper.title === 'Risk Management at Institutional Scale' ||
                paper.title === 'Live Trading Architecture';
              const isMachineLearning = paper.title === 'Machine Learning for Quantitative Trading';

              return (
                <article
                  key={i}
                  className="glass neon-border rounded-xl p-8 hover:border-neon-cyan transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-bold flex-1 ${isFeatured ? 'text-neon-pink' : 'text-neon-cyan'}`}>
                      {paper.title}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{paper.date}</span>
                  </div>
                  <p className={`${isFeatured ? 'text-white' : 'text-gray-300'} mb-6 leading-relaxed`}>
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-neon-blue/10 border border-neon-blue text-neon-blue rounded-full whitespace-nowrap ${
                          isMachineLearning ? 'text-[11px] md:text-xs px-2.5 py-1' : 'text-sm'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Methodology */}
          <section className="mt-20 glass neon-border-purple rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Research Methodology</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                All research is backed by 8+ years of market data across equities, crypto, and forex. Our methodology emphasizes:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Deterministic, explainable signal generation with full forensic audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Statistical validation across regime-specific windows and drawdown periods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Live execution parity ensuring backtest results remain valid in production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Continuous model monitoring with automated recalibration triggers</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
