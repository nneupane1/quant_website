import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'Careers - QuantFund AI',
  description: 'Hiring will open soon at QuantFund AI',
};

export default function Careers() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pt-20 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <div className="w-[72%] mx-auto rounded-[40px] overflow-hidden -mt-10 mb-4">
              <img
                src="/images/interview.png"
                alt="Careers at QuantFund AI"
                className="w-full object-cover"
                style={{ clipPath: 'inset(6% 6% 8% 6% round 36px)' }}
              />
            </div>
            <div className="relative mb-4 h-4 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent blur-md animate-light-sweep" />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent opacity-70 animate-light-sweep delay-[1.5s]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass neon-border rounded-full text-sm font-medium animate-float-y">
              <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="font-bold text-white">Hiring Opens Soon</span>
            </div>
            <h1 className="text-[2.55rem] md:text-[3.2rem] font-bold mb-6">
              <span className="text-neon-blue">Careers at QuantFund AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are building an institutional-grade quantitative research and execution platform.
              When hiring opens, we will be looking for builders who care about rigor, reliability,
              and market integrity.
            </p>
            <div className="max-w-3xl mx-auto mt-6">
              <div className="glass bg-neon-green/10 border border-neon-green/40 shadow-[0_0_22px_rgba(0,255,153,0.25)] rounded-xl px-6 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neon-green/80 mb-2">
                  Early Career Priority
                </p>
                <p className="text-neon-green font-semibold leading-relaxed">
                  The first round will prioritize students and fresh graduates who demonstrate genuine market curiosity,
                  evidence of self-driven trading research, and the desire to grow inside a quantitatively driven environment.
                </p>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold mb-4 text-neon-cyan">Future Focus Areas</h2>
            <p className="text-gray-300 mb-6">
              These are indicative domains we plan to hire for as the team grows&mdash;exact roles may evolve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Quant Research (SMC + ML Confluence)',
                'ML Engineering (Feature Stores, Model Ops)',
                'Data Engineering (Streaming + Backtest Pipelines)',
                'Systems Engineering (Low-Latency Execution)',
                'Frontend (Research Dashboards)',
                'Risk Engineering (Regime & Stress Frameworks)',
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
