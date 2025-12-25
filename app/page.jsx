import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PerformanceDashboard } from '@/components/sections/PerformanceDashboard';
import { VisitCounter } from '@/components/sections/VisitCounter';
import { DataVisualization } from '@/components/sections/DataVisualization';
import { RiskDashboard } from '@/components/sections/RiskDashboard';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/footer/Footer';
import { AmbientBlobs } from '@/components/shared/AmbientBlobs';

export const metadata = {
  title: 'QuantFund AI - Quantitative Trading Platform',
  description: 'Enterprise-grade quantitative trading research and execution platform',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <section className="relative overflow-hidden">
        <AmbientBlobs />
        <div className="relative z-10">
          <PerformanceDashboard />
          <VisitCounter />
          <DataVisualization />
          <RiskDashboard />
          <TeamSection />
          <CTASection />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
