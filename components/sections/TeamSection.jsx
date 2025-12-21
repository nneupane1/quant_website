'use client';

import React from 'react';
import Image from 'next/image';

export const TeamSection = () => {
  const team = [
    {
      role: 'Founder & CEO',
      name: 'Nischal Neupane',
      title: 'AI & Quant Engineering Expert',
      bio: 'Building institutional-grade trading systems through advanced ML and data engineering',
      expertise: [
        'Machine Learning Engineering',
        'Quantitative Trading',
        'Big Data Processing',
        'Edge/Cloud Architecture',
      ],
      background:
        'Originally from Nepal with academic and professional experiences spanning USA and Germany. Specialized in Big Data and Machine Learning Engineering with strong foundation in Physics, Mathematics, and Financial Engineering. Experienced in algorithmic trading, deep-learning projects, and data-driven solutions across renewable energy, re-insurance, and automotive sectors.',
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
                      <p className="text-gray-300 leading-relaxed text-sm">{member.background}</p>
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
