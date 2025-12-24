import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Research - QuantFund AI',
  description: 'Deep dive into our trading research and methodologies',
};

export default function Research() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <img
              src="/images/quant_engineer.png"
              alt="Quantitative research engineering"
              className="w-[72%] mx-auto rounded-2xl mb-2 -mt-6 object-contain"
            />
            <h1 className="text-[2.15rem] md:text-[2.7rem] font-bold mb-3 text-neon-blue mt-6">
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
                  'Analysis of institutional order flow patterns, breakout mechanics, and structure retest strategies across multi-timeframe frameworks',
                tags: ['SMC', 'Order Flow', 'Price Action'],
                date: 'Dec 2024',
              },
              {
                title: 'Machine Learning for Quantitative Trading',
                description:
                  'Calibration techniques for deterministic confluence + ML fusion, feature engineering best practices, and model drift detection',
                tags: ['ML', 'Calibration', 'Feature Engineering'],
                date: 'Nov 2024',
              },
              {
                title: 'Risk Management at Institutional Scale',
                description:
                  'VaR estimation, Monte Carlo scenario analysis, HMM regime detection, and adaptive position sizing under volatility regimes',
                tags: ['Risk Management', 'VaR', 'Monte Carlo'],
                date: 'Oct 2024',
              },
              {
                title: 'Live Trading System Architecture',
                description:
                  'Building deterministic, auditable trading systems with feature parity between backtesting and live execution',
                tags: ['Architecture', 'Execution', 'Infrastructure'],
                date: 'Sep 2024',
              },
            ].map((paper, i) => (
              <article
                key={i}
                className="glass neon-border rounded-xl p-8 hover:border-neon-cyan transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-neon-cyan flex-1">{paper.title}</h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{paper.date}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{paper.description}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-neon-blue/10 border border-neon-blue text-neon-blue text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Methodology */}
          <section className="mt-20 glass neon-border-purple rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-purple">Research Methodology</h2>
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
