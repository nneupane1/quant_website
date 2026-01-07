import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Insights - QuantFund AI',
  description: 'Market intelligence, regime tracking, and alpha research insights',
};

export default function Insights() {
  return (
    <main className="w-full min-h-screen">
      <Navigation />

      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="w-[95%] sm:w-[79%] mx-auto rounded-[40px] overflow-hidden -mt-20 mb-0">
              <img
                src="/images/insights2.png"
                alt="QuantFund AI insights"
                className="w-full object-cover object-center"
                style={{ clipPath: 'inset(12% 10% 12% 10% round 40px)' }}
              />
            </div>
            <div className="relative -mt-8 mb-10 h-4 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent blur-md animate-light-sweep" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent opacity-70 animate-light-sweep delay-[1.5s]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold -mt-4 mb-6">
              <span className="text-neon-blue">Insights</span>
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
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">What You See in Insights</h2>
            <p className="text-white leading-relaxed mb-6">
              The insights layer exposes the internal reasoning of the trading engine with the granularity of a research workstation and the clarity of an execution desk. Every signal surfaces its structural bias probabilities, retest classifications, wick-flow dominance, and liquidity-distance diagnostics, allowing you to see exactly how the underlying market mechanics shaped the setup. Momentum derivatives, VWAP curvature, volatility guards, and macro filters contextualize the market state, while risk-adjusted expectancy scores quantify the edge under current regime conditions. Each alert is backed by a fully traceable signal lineage—feature states, structural labels, model outputs, and calibration metadata—giving researchers a complete narrative of why the system favors a trade and whether execution conditions are met. The result is a transparency layer where confluence becomes visible, intuition becomes measurable, and every decision is supported by an auditable empirical footprint.
            </p>
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
                  <span className="text-neon-blue">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="glass neon-border-pink rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Institutional Context, Human Clarity</h2>
            <div className="space-y-4 text-white">
              <p>
                Insights is not a reporting widget — it is the system’s reasoning interface, translating raw microstructure computations into explanations that a human can act on with conviction. Each signal is decomposed into its causal drivers: which structural shifts triggered the bias, which volatility conditions shaped the expectancy, which liquidity gradients validated the setup, and how the execution should be staged across risk boundaries. Instead of opaque alerts, you see the underlying physics of the trade — displacement mechanics, retest integrity, wick-flow dominance, regime likelihoods, and probability-calibrated confluence vectors.
              </p>
              <p>
                Behind the scenes, every insight is rendered from the same deterministic feature graph used in research, backtesting, and live execution. That means the logic is fully reproducible, drift-free, and audit-ready — the explanation you see is the exact logic the machine used. This continuity creates institutional clarity: decisions are traceable, parameter influences are explicit, and the human operator gains complete situational awareness in fast, adversarial markets. Insights becomes the bridge between quantitative rigor and human judgment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                'Decision Dashboards',
                'Causal Trace Dashboards',
                'Execution Readiness Dashboards',
                'Regime Context Dashboards',
                'Liquidity Lens Dashboards',
                'Audit-Ready Dashboards',
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2">
                  <span className="text-neon-blue">✓</span>
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
