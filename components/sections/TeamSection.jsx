'use client';

import React from 'react';
import Image from 'next/image';

export const TeamSection = () => {
  const team = [
    {
      role: 'Founder & CEO',
      name: 'Nischal Neupane',
      title: 'AI & Quant Engineering Expert',
      bio:
        "Nischal is a Quantitative Systems Engineer and Data Scientist with a multidisciplinary foundation spanning gravitational and particle physics, advanced mathematics, computer science, and financial engineering. Originally from Nepal, with academic and professional experience across top tier universities in the United States and Germany, he developed a global, systems-level perspective on complex data environments and high-stakes analytical systems. His career has encompassed renewable-energy forecasting, catastrophe-risk modeling through CNN-based remote sensing in the reinsurance sector, and large-scale automotive telemetry and predictive-maintenance frameworks integrating on-board ECUs, edge microcontrollers, and cloud-based intelligence. Across these domains—defined by noisy data, asymmetric risk, and stringent statistical rigor—he has built high-fidelity machine-learning pipelines, real-time diagnostic systems, and large-volume data architectures. These experiences now converge in his work on advanced AI-driven market systems, where feature engineering, deep-learning models, agentic AI, and large-scale data processing are unified into institutional-grade research and execution platforms engineered for adaptive performance and deterministic, risk-adjusted decision-making.",
      expertise: [
        'Machine Learning Engineering',
        'Quantitative Trading',
        'Big Data Processing',
        'Edge/Cloud Architecture',
      ],
      highlights: [
        {
          title: 'Cross-Industry Applied Analytics & Systems Engineering',
          description:
            'Engineered analytical and decision-support systems across renewable-energy markets, reinsurance risk portfolios, and automotive telemetry ecosystems - domains defined by stochastic inputs, regime-dependent dynamics, high-dimensional feature spaces, and stringent reliability requirements under uncertainty.',
        },
        {
          title: 'Full-Stack Machine Learning & Data Infrastructure',
          description:
            'Designed and deployed end-to-end ML pipelines incorporating distributed data ingestion, schema-driven feature engineering, large-scale batch and streaming processing, model training and hyperparameter optimization, statistical calibration, CI/CD automation, and production deployment across both cloud-native (MLOps) and edge-compute environments.',
        },
        {
          title: 'Predictive-Maintenance & Telemetry Intelligence',
          description:
            'Developed real-time fault-detection and predictive-maintenance frameworks for powertrain and engine systems, integrating on-board ECUs, microcontroller-based diagnostics, time-series compression, telematics data fusion, and cloud-scale predictive modeling to detect mechanical degradation early and reliably.',
        },
        {
          title: 'Statistical Modeling Under Asymmetric Risk',
          description:
            'Constructed models for environments with non-Gaussian noise, heavy-tailed distributions, and asymmetric loss functions - emphasizing stability across volatility regimes, interpretability of decision pathways, robustness to data drift, and consistently reliable behavior in mission-critical settings.',
        },
        {
          title: 'AI-Native Market Architecture & Execution Systems',
          description:
            'Architects unified trading platforms that integrate liquidity and volatility surface modeling, microstructure-informed feature stores, deep-learning predictors, generative modeling workflows, agentic AI orchestration, and deterministic execution logic - creating systems that operate autonomously, adapt to structural regime shifts, and maintain institutional-grade risk controls.',
        },
      ],
      color: 'neon-cyan',
      image: '/images/nischal.jpg', // Update this with your photo path
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-blue">Leadership</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Driven by deep expertise in quantitative trading, machine learning, and institutional-grade infrastructure
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="glass neon-border rounded-2xl p-8 md:p-12 hover:border-neon-cyan transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Profile Info */}
                <div className="md:col-span-1">
                  <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 rounded-xl p-8 border border-neon-cyan/20 text-center">
                    {/* Avatar */}
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink p-0.5 overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full rounded-full object-cover"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                          <span className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
                            NN
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-neon-cyan mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                    <p className="text-sm font-medium text-neon-pink mb-6">{member.title}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-col gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-xs font-medium bg-neon-cyan/10 text-neon-cyan rounded-full border border-neon-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Bio & Details */}
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    {/* Main Bio */}
                    <div>
                      <h4 className="text-lg font-bold text-neon-pink mb-3">Background</h4>
                      <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                    </div>

                    {/* Detailed Experience */}
                    <div>
                      <div className="mt-2 space-y-4">
                        {member.highlights.map((item, idx) => (
                          <div key={idx}>
                            <p className="text-base font-semibold text-neon-cyan mb-1">{item.title}</p>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Beyond Engineering */}
                    <div>
                      <h4 className="text-lg font-bold text-neon-pink mb-3">Beyond Engineering</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300 leading-relaxed">
                        <li>Trained in Indian Classical Bansuri</li>
                        <li>Proficient in Tabla, Guitar, and Harmonium</li>
                        <li>Passionate about creative writing and poetry</li>
                        <li>Practices Sahaja Yoga meditation and serves as a voluntary instructor</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 glass neon-border-pink rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-neon-pink mb-6">Mission</h3>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Our mission is to democratize institutional-grade quantitative trading by delivering open-source, production-ready infrastructure that moves seamlessly from research to live execution without compromising data integrity, risk controls, or reproducibility. QuantFund AI is committed to ethical market participation, designing systems that behave as responsible liquidity providers—stabilizing volatility rather than amplifying it, and aligning execution with market microstructure health rather than predatory behavior.
                </p>
                <p>
                  Inspired by principles of clarity, discipline, and introspective awareness, the platform incorporates a philosophy drawn from meditative practice: decisions must be grounded, unbiased, and free from emotional noise. This ethos extends into our engineering—models are explainable, backtests are auditable, risk states are transparent, and every trade is defensible.
                </p>
                <p>
                  QuantFund AI exists so quants can focus on research, discovery, and edge, supported by an AI architecture that is principled, ethically aligned, and engineered to contribute positively to market ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why QuantFund AI */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Data-Driven',
              description: '8+ years of institutional-grade market data with forensic-level analysis',
              icon: '📊',
            },
            {
              title: 'ML-First',
              description: 'Deep learning and traditional ML converge for superior signal generation',
              icon: '🤖',
            },
            {
              title: 'Production-Grade',
              description: 'Built for institutional desks that demand reliability and reproducibility',
              icon: '⚙️',
            },
          ].map((point, i) => (
            <div key={i} className="glass neon-border rounded-xl p-6">
              <div className="text-3xl mb-4">{point.icon}</div>
              <h4 className="text-lg font-bold text-neon-cyan mb-2">{point.title}</h4>
              <p className="text-sm text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
