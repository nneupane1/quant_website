import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PerformanceDashboard } from '@/components/sections/PerformanceDashboard';
import { CinematicCapabilities } from '@/components/sections/CinematicCapabilities';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';
import { SeasonalSnow } from '@/components/seasonal/SeasonalSnow';

export const metadata = {
  title: 'QuantFund AI - Quantitative Trading Platform',
  description: 'Enterprise-grade quantitative trading research and execution platform',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <SeasonalSnow />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <section className="relative overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10">
          <PerformanceDashboard />
          <CinematicCapabilities />
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan/70 mb-3">
                  Portfolio Intelligence
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">
                  Portfolio Systems Overview
                </h2>
                <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                  Volatility surfaces, factor attribution, regime-conditioned exposure, CVaR guardrails,
                  liquidity-adjusted stress overlays, and execution slippage analytics unified in a
                  single institutional-grade portfolio cockpit.
                </p>
              </div>
              <div className="glass neon-border rounded-2xl p-6">
                <img
                  src="/images/portfolio.png"
                  alt="QuantFund AI portfolio analytics"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </section>
          <TeamSection />
          <CTASection />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
