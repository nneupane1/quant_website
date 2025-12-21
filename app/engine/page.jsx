import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Trading Engine - QuantFund AI',
  description: 'Experience our live trading engine and visualization',
};

export default function Engine() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Trading Engine</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real-time signal generation, risk management, and execution orchestration
            </p>
          </div>

          {/* Engine Capabilities */}
          <div className="space-y-8 mb-16">
            {[
              {
                title: 'Live Scanner',
                description:
                  'Fetches 1m OHLCV, resamples to 15m/1h, engineers 38+ features, evaluates HMM guardrails, runs SMC+ML confluence scoring, and triggers alerts with full forensic context',
                icon: '⚡',
              },
              {
                title: 'Risk Manager V2',
                description:
                  'Enforces VaR(95), adaptive drawdown floors, Monte Carlo limits, exposure caps, and regime-aware position sizing with real-time exposure tracking',
                icon: '⚖️',
              },
              {
                title: 'Execution Router',
                description:
                  'Routes confirmed signals to Binance live with order validation, fill tracking, trailing stop automation, and PnL monitoring',
                icon: '🚀',
              },
              {
                title: 'Dashboards',
                description:
                  'Neon-themed Streamlit apps showing Live Alerts, Performance curves, Monte Carlo cones, Risk Regimes, and ML Diagnostics in real-time',
                icon: '📊',
              },
            ].map((capability, i) => (
              <div
                key={i}
                className="glass neon-border rounded-xl p-8 hover:border-neon-cyan transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{capability.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-neon-cyan mb-2">{capability.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Pipeline */}
          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-neon-cyan">Feature Engineering Pipeline</h2>
            <div className="space-y-4">
              <p className="text-gray-300 mb-6">
                Every signal is built from the same deterministic feature set used for backtesting, ensuring live parity:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Price Action (ATR, EMA, Slope)',
                  'Structure (BOS/CHOCH, Retests)',
                  'Candlestick Metrics (Body/Wick)',
                  'Volatility (MACD, Bollinger)',
                  'Liquidity (VWAP, Volume Z-score)',
                  'Session & Regime Indicators',
                  'Correlation & Funding Signals',
                  'ML Probability Scores',
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2"
                  >
                    <span className="text-neon-green">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Scoring Methodology */}
          <section className="glass neon-border-pink rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Confluence Scoring</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Every trade receives a composite confidence score (0–10) from:
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <p className="font-semibold text-neon-blue mb-1">Structure (0–3)</p>
                  <p className="text-sm text-gray-400">BOS confirmation, CHOCH clarity, ATR-aware retest geometry</p>
                </div>
                <div>
                  <p className="font-semibold text-neon-blue mb-1">Candlesticks (0–2)</p>
                  <p className="text-sm text-gray-400">Body/wick dominance, displacement magnitude, engulfing patterns</p>
                </div>
                <div>
                  <p className="font-semibold text-neon-blue mb-1">Indicators (0–2)</p>
                  <p className="text-sm text-gray-400">EMA stacking, MACD alignment, VWAP positioning, Bollinger squeeze</p>
                </div>
                <div>
                  <p className="font-semibold text-neon-blue mb-1">Session & Macro (0–1.5)</p>
                  <p className="text-sm text-gray-400">HMM regime, liquidity z-score, correlation flags</p>
                </div>
                <div>
                  <p className="font-semibold text-neon-blue mb-1">ML Blend (0–1.5)</p>
                  <p className="text-sm text-gray-400">Calibrated ML probability weighted by ml_weight parameter</p>
                </div>
              </div>
            </div>
          </section>

          {/* Backtesting */}
          <section className="glass neon-border rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-cyan">Backtesting Infrastructure</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Every live signal can be replayed offline with identical logic:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>2017–present historical data with realistic fills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>ATR-tiered stop placement and trailing engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Monte Carlo scenario building and risk-of-ruin metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>HMM regime classification across all historical windows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-green">✓</span>
                  <span>Full trade log export for statistical profiling</span>
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
