import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Careers - QuantFund AI',
  description: 'Hiring will open soon at QuantFund AI',
};

export default function Careers() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <img
              src="/images/career.png"
              alt="Careers at QuantFund AI"
              className="w-full rounded-2xl mb-8 object-cover"
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass neon-border rounded-full text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="font-bold text-white">Hiring Opens Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Careers at QuantFund AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are building an institutional-grade quantitative research and execution platform.
              When hiring opens, we will be looking for builders who care about rigor, reliability,
              and market integrity.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Research-First Culture',
                description:
                  'We reward deep thinking, reproducible research, and precise decision frameworks that stand up to real-world volatility.',
              },
              {
                title: 'Production-Grade Systems',
                description:
                  'We engineer for determinism, observability, and reliability so research and execution never diverge.',
              },
              {
                title: 'Ethical Market Participation',
                description:
                  'Our systems are designed to behave as responsible liquidity providers, aligned with market health.',
              },
            ].map((item, i) => (
              <div key={i} className="glass neon-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="glass neon-border rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-neon-cyan">Roles We Will Open</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Quant Researcher (SMC + ML Confluence)',
                'ML Engineer (Feature Stores, Model Ops)',
                'Data Engineer (Streaming + Backtest Pipelines)',
                'Systems Engineer (Low-Latency Execution)',
                'Frontend Engineer (Research Dashboards)',
                'Risk Engineer (Regime & Stress Frameworks)',
              ].map((role, i) => (
                <div
                  key={i}
                  className="px-4 py-3 glass neon-border rounded-lg text-sm text-neon-blue flex items-center gap-2"
                >
                  <span className="text-neon-green">✓</span>
                  {role}
                </div>
              ))}
            </div>
          </section>

          <section className="glass neon-border-pink rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-neon-pink">Stay in the Loop</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hiring will open soon. If you want to be notified when roles go live, reach out and
              we will keep you updated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@quantfund.ai" className="button-primary text-sm">
                Email Careers
              </a>
              <a href="/#contact" className="px-6 py-3 glass neon-border text-neon-blue font-bold rounded-lg">
                Contact Form
              </a>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
