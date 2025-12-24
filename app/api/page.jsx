import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'API - QuantFund AI',
  description: 'QuantFund AI API access will open soon',
};

export default function ApiPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto min-h-[60vh] flex items-center justify-center">
          <div className="glass neon-border rounded-3xl px-10 py-12 text-center animate-float-x">
            <p className="text-4xl md:text-6xl font-bold text-neon-cyan mb-4">API Access</p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-200">Coming Soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
