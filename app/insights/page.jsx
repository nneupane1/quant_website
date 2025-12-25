import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Insights - QuantFund AI',
  description: 'Market intelligence, regime tracking, and alpha research insights',
};

export default function Insights() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <img
              src="/images/insights1.png"
              alt="QuantFund AI insights"
              className="w-[72%] mx-auto rounded-2xl mb-2 -mt-6 object-contain"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A research-grade intelligence layer that turns market microstructure into actionable
              narratives, regime diagnostics, and execution-ready context.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Regime Briefings',
                description:
                  'Daily classification of volatility regimes, liquidity gradients, and structural bias shifts across assets.',
              },
              {
                title: 'Signal Intelligence',
                description:
                  'Confluence-ranked opportunities with calibrated probability scores and reasoning vectors.',
              },
              {
                title: 'Risk Radar',
                description:
                  'Macro guardrail checks, stress overlays, and execution readiness diagnostics.',
              },
            ].map((item, i) => (
              <div key={i} className="glass neon-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-cyan">What You See In Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Structural bias probabilities and retest classifications',
                'Liquidity-distance and wick-flow dominance diagnostics',
                'MACD momentum derivatives and VWAP curvature maps',
                'Risk-adjusted expectancy and regime-likelihood scoring',
                'Execution readiness with macro and volatility guardrails',
                'Audit-ready signal lineage for every research narrative',
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2">
                  <span className="text-neon-green">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="glass neon-border-pink rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Institutional Context, Human Clarity</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Insights is not just reporting. It is a live reasoning layer that explains why a
                signal exists, which parameters drove the outcome, and how execution should be staged.
              </p>
              <p>
                Every insight is grounded in the same deterministic graph used in research, enabling
                clarity, reproducibility, and confident decision-making in dynamic markets.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
