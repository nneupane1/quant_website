import { Navigation } from '@/components/navigation/Navigation';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PerformanceDashboard } from '@/components/sections/PerformanceDashboard';
import { DataVisualization } from '@/components/sections/DataVisualization';
import { RiskDashboard } from '@/components/sections/RiskDashboard';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/footer/Footer';

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
      <PerformanceDashboard />
      <DataVisualization />
      <RiskDashboard />
      <TeamSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
