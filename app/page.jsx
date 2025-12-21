import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'QuantFund AI - Quantitative Trading Platform',
  description: 'Enterprise-grade quantitative trading research and execution platform',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />

      {/* HERO SECTION - Full Width Image */}
      <section className="section-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
          {/* Left Content */}
          <div className="px-12 py-24 md:py-32 flex flex-col justify-center bg-white">
            <div className="max-w-2xl">
              <p className="uppercase-text text-accent mb-6">Advanced Trading Platform</p>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-text-primary leading-tight">
                Elevating Quantitative Trading to the Next Level
              </h1>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-xl">
                Harness the power of advanced machine learning, systematic analysis, and proprietary data to execute profitable trading strategies at scale.
              </p>
              <div className="flex gap-4">
                <button className="button-primary">Learn More</button>
                <button className="button-secondary">Contact Us</button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-96 lg:h-auto flex items-center justify-center relative overflow-hidden">
            <img 
              src="/images/hero-trading.svg" 
              alt="Trading Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROFITABLE FROM DAY 1 - WITH GRADIENT BACKGROUND */}
      <section className="section-border bg-gradient-to-br from-gray-50 via-white to-gray-50 px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase-text text-accent mb-6">Performance Metrics</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-text-primary">
            Profitable From Day One
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '18.7%', label: 'Average Annual Return', icon: '📈' },
              { value: '0.62', label: 'Sharpe Ratio', icon: '⚡' },
              { value: '89%', label: 'Win Rate', icon: '✓' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="bg-white border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-accent transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-text-secondary text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM EXCELLENCE - FEATURES WITH GRADIENT BOXES */}
      <section className="section-border bg-white px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase-text text-accent mb-6">Our Platform</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-text-primary">
            Excellence in Quantitative Trading
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-16">
            A comprehensive suite of tools and infrastructure built specifically for systematic traders and quantitative researchers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Advanced Research Suite', 
                description: 'Backtest across multiple markets with machine learning optimization and robust statistical analysis.',
                gradient: 'from-orange-50 to-red-50'
              },
              { 
                title: 'Risk Management', 
                description: 'Real-time portfolio monitoring, VaR calculations, and dynamic position sizing algorithms.',
                gradient: 'from-red-50 to-pink-50'
              },
              { 
                title: 'Multi-Asset Trading', 
                description: 'Seamlessly trade equities, cryptocurrencies, forex, and commodities on a unified platform.',
                gradient: 'from-pink-50 to-orange-50'
              },
              { 
                title: 'Live Execution', 
                description: 'Direct market access with intelligent order routing and real-time execution monitoring.',
                gradient: 'from-yellow-50 to-orange-50'
              },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className={`bg-gradient-to-br ${feature.gradient} border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent cursor-pointer`}>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  <div className="mt-6 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - WITH IMAGE AND GRADIENT */}
      <section className="section-border bg-gradient-to-br from-gray-50 via-white to-gray-100 px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="uppercase-text text-accent mb-6">Our Team</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-text-primary">
                Excellence is a Team Effort
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
                A diverse group of seasoned traders, data scientists, and engineers working together to build the next generation of quantitative trading systems.
              </p>
              <ul className="space-y-4">
                {[
                  'Experienced traders with 15+ years in financial markets',
                  'PhD-level data scientists and ML engineers',
                  'Full-stack platform architects',
                  'Risk management and compliance experts'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent text-xl font-bold">✓</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/team-photo.svg" 
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS/BLOG SECTION - WITH GRADIENT CARDS */}
      <section className="section-border bg-white px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase-text text-accent mb-6">Insights</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-text-primary">
            Sharing Knowledge to Inspire Innovation
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mb-16">
            Explore our latest research, market insights, and technical deep-dives into quantitative trading strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'The Fundamentals of Machine Learning in Trading', 
                category: 'RESEARCH',
                gradient: 'from-blue-50 to-cyan-50'
              },
              { 
                title: 'Understanding Market Microstructure', 
                category: 'TRADING',
                gradient: 'from-purple-50 to-pink-50'
              },
            ].map((article, i) => (
              <a key={i} href="#" className="group">
                <div className={`bg-gradient-to-br ${article.gradient} border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent transition-all duration-300 hover:-translate-y-2 h-full`}>
                  <p className="uppercase-text text-accent text-sm mb-4">{article.category}</p>
                  <h3 className="text-2xl font-bold text-text-primary mb-6 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-accent font-semibold">Read Article →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-accent via-red-500 to-accent px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the next generation of systematic traders. Schedule a demo with our team.
          </p>
          <button className="px-12 py-4 bg-white text-accent font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
            Schedule Demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

      {/* CTA Section */}
      <section className="px-6 py-24 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-text-primary">
            Ready to Build Your Edge?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Join institutional traders using QuantFund AI to research, backtest, and execute strategies at scale.
          </p>
          <button className="button-primary">Schedule Demo</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
