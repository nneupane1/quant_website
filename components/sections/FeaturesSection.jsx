'use client';

import { features } from '@/constants/siteMetadata';
import { VisitCounter } from '@/components/sections/VisitCounter';

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <VisitCounter />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block mb-2">Institutional</span>
            <span className="gradient-text text-5xl md:text-6xl">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Enterprise-grade features designed for professional traders and quant researchers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass neon-border rounded-xl p-6 hover:border-neon-cyan transition-all duration-300 hover:translate-y-[-4px] overflow-hidden"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-pink/0 group-hover:from-neon-blue/10 group-hover:to-neon-pink/5 transition-all duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Every component is production-grade and integrated into a unified system
          </p>
        </div>
      </div>
    </section>
  );
};
