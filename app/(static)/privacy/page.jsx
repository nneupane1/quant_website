import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Privacy Policy - QuantFund AI',
};

export default function Privacy() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">1. Introduction</h2>
              <p>
                QuantFund AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection and use of information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">2. Information Collection</h2>
              <p>
                We collect information you provide directly, such as when you fill out a contact form or send us an email. This may include your name, email address, and any message content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">3. Use of Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide customer support, and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at contact@quantfund-ai.com.
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
