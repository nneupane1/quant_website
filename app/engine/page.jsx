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
        <div className="max-w-4xl mx-auto min-h-[60vh] flex items-center justify-center">
          <div className="text-center animate-pulse">
            <p className="text-4xl md:text-5xl font-bold text-neon-cyan">Coming Soon!</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
