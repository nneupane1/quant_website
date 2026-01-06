import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Trading Engine - QuantFund AI',
  description: 'Experience our live trading engine and visualization',
};

export default function Engine() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />
      
      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="w-[95%] sm:w-[79%] mx-auto rounded-[40px] overflow-hidden -mt-10 mb-4">
              <img
                src="/images/tradingroom1.png"
                alt="QuantFund AI live trading room"
                className="w-full object-cover object-center"
                style={{ clipPath: 'inset(12% 10% 12% 10% round 40px)' }}
              />
            </div>
            <div className="relative mb-4 h-4 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent blur-md animate-light-sweep" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent opacity-70 animate-light-sweep delay-[1.5s]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neon-blue">Live Trading Room</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A high-precision trade execution stack with deterministic research parity, microstructure-aware routing, and audit-grade telemetry.
            </p>
          </div>

          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Trading Room Capabilities</h2>
            <p className="text-white leading-relaxed">
              The trading room operates as a real-time decision engine where market data, structural signals, and ML-calibrated confluence vectors converge into auditable execution intent. Every incoming bar is transformed through the live feature graph, where session context, ATR regimes, liquidity distances, curvature metrics, and structural annotations are computed deterministically. Signal evaluators run in micro-batched cycles, checking execution-readiness conditions such as volatility thresholds, macro guardrails, and liquidity posture before producing actionable alert vectors. The routing layer incorporates pre-trade validation, slippage forecasting, and post-trade reconciliation, ensuring that execution logic is consistent with both model assumptions and market microstructure. Dashboards stream latency, drift, exposure, PnL decomposition, and stress readouts in real time, enabling the trading room to function with the transparency and responsiveness of an institutional execution desk. Every alert, decision, and model output is captured in a structured audit trail, creating a fully traceable and compliance-ready environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                'Live scanner with deterministic confluence scoring and execution readiness checks',
                'Feature store parity between backtest, forward test, and live inference',
                'Liquidity-aware routing with pre-trade validation and post-trade reconciliation',
                'Real-time dashboards for risk, exposure, and performance attribution',
                'Structured alert vectors with bias probabilities and macro guardrail scores',
                'Full audit trail exports for research review and compliance workflows',
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2">
                  <span className="text-neon-green">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Research-to-Execution Parity</h2>
            <p className="text-white leading-relaxed">
              The system enforces strict equivalence between research outputs and live trading decisions by binding both environments to the same declarative feature graph. All transformations—resampling operators, session encodings, ATR normalization, candle geometry tensors, liquidity-distance embeddings, VWAP and volatility curvature, MACD derivatives, and regime-state classifiers—are computed through a centralized registry shared by the backtester, simulator, and live engine. This eliminates one of the most common sources of quant failure: drift between historical inference and live execution. ML signals are probability-calibrated in research and then deployed with version-locked parameters to guarantee consistent behavior across environments. Structured alert vectors carry liquidity gradients, bias probabilities, regime likelihoods, and contextual metadata, enabling both automated and discretionary workflows to review the same information that shaped the model’s decision. Full trade trails are exported for post-analysis, allowing researchers to replay executions with exact feature states, ensuring reproducibility and governance at institutional standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                'Streaming resampling with session encoding and ATR normalization',
                'Deterministic confluence scoring with ML probability calibration',
                'Structured alert vectors with liquidity gradients and bias probabilities',
                'Full trade and decision audit trails for compliance review',
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2">
                  <span className="text-neon-green">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="glass neon-border rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Market-Grade Execution Discipline</h2>
            <p className="text-white leading-relaxed">
              Execution is governed by a rigorously defined risk and microstructure framework designed to behave like a responsible liquidity participant rather than a retail-order generator. Every order is staged through a pre-trade validation layer that evaluates volatility regimes, liquidity shelves, macro guardrails, expected slippage, and counterparty conditions before approval. Orders that pass these checks are routed through a latency-aware engine capable of switching paths during volatility spikes, liquidity fractures, or widening spreads. Limit protections, exposure caps, adaptive position sizing, and real-time trailing logic ensure that trades evolve in sync with market conditions rather than fixed assumptions. Post-trade reconciliation matches fills against expected impact, validating that execution behavior remains within acceptable error surfaces. The entire architecture is designed to minimize adverse selection, reduce footprint, and maintain deterministic performance—functioning as a disciplined liquidity provider-in-training, guided by modeling rigor and transparent governance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                'Pre-trade validation with volatility, liquidity, and macro guardrails',
                'Latency-aware routing with slippage and impact controls',
                'Limit protections, exposure caps, and adaptive position sizing',
                'Post-trade reconciliation with impact and execution error checks',
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2">
                  <span className="text-neon-green">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
