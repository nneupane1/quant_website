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
        "Nischal is a quantitative systems engineer whose multidisciplinary foundation spans particle and gravitational physics, advanced mathematics, computer science, and financial engineering. Originally from Nepal, with academic and professional experience across the USA and Germany, he has developed a global, systems-level perspective on complex data environments. His career has bridged high-stakes applications - from renewable-energy forecasting and reinsurance risk modeling to automotive telemetry and predictive-maintenance systems - culminating in the design of advanced AI-driven market architectures that transform raw data into deterministic, risk-adjusted intelligence. Today, his work unifies feature engineering, large-scale data processing, deep-learning models, and agentic AI into integrated research and execution platforms engineered for institutional reliability and adaptive performance.",
      expertise: [
        'Machine Learning Engineering',
        'Quantitative Trading',
        'Big Data Processing',
        'Edge/Cloud Architecture',
      ],
      journey:
        "Nischal's academic and professional roles led to the development of high-fidelity Machine Learning pipelines for renewable-energy trading systems, catastrophe-risk modeling using CNN-based remote sensing project within reinsurance sector, and automotive after-sales analytics and vehicle telemetry. In the automotive domain, he contributed to predictive-maintenance systems for powertrain and engine components, integrating on-board real-time health monitoring deployed on edge microcontrollers and ECUs with off-board cloud aggregation, large-scale data processing and predictive modeling - domains where noisy data, asymmetric risk, and statistical rigor define the engineering challenge.",
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
      beyond: [
        'Trained in Indian Classical Bansuri',
        'Proficient in Tabla, Guitar, and Harmonium',
        'Passionate about creative writing and poetry',
        'Practices Sahaja Yoga meditation and serves as a voluntary instructor',
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
            <span className="gradient-text">Leadership</span>
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
                      <h4 className="text-lg font-bold text-neon-blue mb-3">Background</h4>
                      <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                    </div>

                    {/* Detailed Experience */}
                    <div>
                      <h4 className="text-lg font-bold text-neon-blue mb-3">Professional Journey</h4>
                      {member.journey ? (
                        <p className="text-gray-300 leading-relaxed text-sm">{member.journey}</p>
                      ) : null}
                      <div className="mt-4 space-y-4">
                        {member.highlights.map((item, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-neon-cyan" />
                            <div>
                              <p className="text-sm font-semibold text-neon-cyan">{item.title}</p>
                              <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-neon-blue mb-3">Beyond Engineering</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {member.beyond.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="mt-1 h-2 w-2 rounded-full bg-neon-pink" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-border">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                        <p className="text-xl font-bold text-neon-cyan">15+</p>
                        <p className="text-xs text-gray-400">Years</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Markets</p>
                        <p className="text-xl font-bold text-neon-pink">3+</p>
                        <p className="text-xs text-gray-400">Continents</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Focus</p>
                        <p className="text-xl font-bold text-neon-purple">ML-First</p>
                        <p className="text-xs text-gray-400">Approach</p>
                      </div>
                    </div>

                    {/* Core Competencies */}
                    <div>
                      <h4 className="text-lg font-bold text-neon-blue mb-3">Core Competencies</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'Quantitative Trading Systems',
                          'Machine Learning Engineering',
                          'Big Data Architecture',
                          'Feature Engineering',
                          'Risk Management',
                          'Real-time Processing',
                          'Model Deployment',
                          'Statistical Analysis',
                        ].map((competency, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-neon-green rounded-full" />
                            <span className="text-sm text-gray-300">{competency}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 glass neon-border-pink rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-neon-pink mb-6">Mission & Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-neon-cyan mb-3">Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                Democratize institutional-grade quantitative trading through open-source, production-ready infrastructure. 
                Enable traders and quants to move from research to live execution without compromising on data integrity, 
                risk management, or reproducibility.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-neon-cyan mb-3">Vision</h4>
              <p className="text-gray-300 leading-relaxed">
                Build the most trusted ML-powered trading platform where every signal is explainable, every backtest is 
                auditable, and every trade is defensible. A place where quants spend time on research, not infrastructure.
              </p>
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
