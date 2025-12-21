import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Terms of Service - QuantFund AI',
};

export default function Terms() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using QuantFund AI ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on QuantFund AI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">3. Disclaimer</h2>
              <p>
                The materials on QuantFund AI are provided on an 'as is' basis. QuantFund AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">4. Limitations</h2>
              <p>
                In no event shall QuantFund AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QuantFund AI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">5. Trading Disclaimer</h2>
              <p>
                QuantFund AI provides educational and analytical tools for trading research. Trading and investing involve substantial risk of loss. Past performance does not guarantee future results. Always conduct your own research and consult with financial advisors before making trading decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">6. Changes to Terms</h2>
              <p>
                QuantFund AI may revise these terms of service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">7. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at contact@quantfund-ai.com.
              </p>
            </section>

            <div className="pt-8 border-t border-dark-border text-sm text-gray-500">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
