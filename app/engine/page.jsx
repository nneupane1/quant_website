import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Trading Engine - QuantFund AI',
  description: 'Experience our live trading engine and visualization',
};

export default function Engine() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <img
              src="/images/tradingroom.png"
              alt="QuantFund AI live trading room"
              className="w-[72%] mx-auto rounded-2xl mb-2 -mt-6 object-contain"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Live Trading Room</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A hedge fund level execution stack with deterministic research parity,
              microstructure-aware routing, and audit-grade telemetry.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Execution Orchestration',
                description:
                  'Signal validation, order routing, and fill tracking operate on a unified parameter registry so live trades match research expectations.',
              },
              {
                title: 'Risk Governance',
                description:
                  'VaR-aware exposure limits, regime-adjusted position sizing, and continuous stress checks keep execution within guardrails.',
              },
              {
                title: 'Telemetry & Audit',
                description:
                  'Every decision emits a structured reasoning vector with confluence scores, regime likelihoods, and execution context.',
              },
            ].map((item, i) => (
              <div key={i} className="glass neon-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-cyan">Trading Room Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <h2 className="text-3xl font-bold mb-6 text-neon-cyan">Research-to-Execution Parity</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The live trading room consumes the same feature graph used in backtests and simulations:
              candle geometry tensors, liquidity-distance embeddings, VWAP and volatility curvature,
              MACD momentum derivatives, and regime-state classifiers. This removes drift between
              research and production.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <section className="glass neon-border-pink rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Market-Grade Execution Discipline</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Orders are staged with pre-trade validation, limit protections, and latency-aware routing.
                Every execution candidate is stress-scored against volatility regimes, macro guardrails,
                and liquidity conditions before it ever hits the market.
              </p>
              <p>
                This architecture is designed to behave as a responsible liquidity participant, reducing
                market impact while maintaining deterministic performance and transparent governance.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
