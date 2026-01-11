'use client';

import React from 'react';

export const RiskDashboard = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-neon-blue/70 mb-3">Risk Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neon-blue mb-4">Risk Management System</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A live risk envelope that blends regime awareness, stress diagnostics, and execution-aware exposure control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* VaR & Risk Metrics */}
          <div className="glass neon-border-pink rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-neon-pink">Risk Metrics</h3>
            
            <div className="space-y-6">
              {[
                { label: 'VaR (95%)', value: '-8.5%', valueClass: 'text-neon-pink', barClass: 'bg-neon-pink', bar: 35 },
                { label: 'Max Drawdown', value: '-12.3%', valueClass: 'text-neon-pink', barClass: 'bg-neon-pink', bar: 48 },
                { label: 'Exposure', value: '45.2%', valueClass: 'text-neon-cyan', barClass: 'bg-neon-cyan', bar: 62 },
                { label: 'Correlation', value: '0.32', valueClass: 'text-neon-blue', barClass: 'bg-neon-blue', bar: 28 },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{metric.label}</span>
                    <span className={`font-bold ${metric.valueClass}`}>{metric.value}</span>
                  </div>
                  <div className="w-full h-2 bg-dark-surface rounded-full overflow-hidden">
                    <div className={`h-full ${metric.barClass}`} style={{ width: `${metric.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monte Carlo Simulation */}
          <div className="glass neon-border rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-neon-cyan">Monte Carlo Scenarios</h3>
            
            <div className="space-y-6">
              {[
                { label: 'Bullish', probability: '68%', returns: '+15.4%' },
                { label: 'Neutral', probability: '22%', returns: '+2.1%' },
                { label: 'Bearish', probability: '10%', returns: '-8.7%' },
              ].map((scenario, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{scenario.label}</span>
                    <div className="flex gap-4">
                      <span className="text-neon-cyan">{scenario.probability}</span>
                      <span className={scenario.returns.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                        {scenario.returns}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-dark-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                      style={{ width: scenario.probability }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg">
              <p className="text-xs text-gray-400 mb-2">Risk-of-Ruin</p>
              <p className="text-2xl font-bold text-neon-blue">0.3%</p>
            </div>
          </div>
        </div>

        {/* Exposure Breakdown */}
        <div className="mt-8 glass neon-border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6 text-neon-purple">Portfolio Exposure</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { asset: 'Crypto', exposure: 35 },
              { asset: 'Equities', exposure: 40 },
              { asset: 'Forex', exposure: 15 },
              { asset: 'Commodities', exposure: 10 },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-dark-surface/50 rounded-lg border border-white/5">
                <p className="text-gray-400 text-sm mb-2">{item.asset}</p>
                <p className="text-3xl font-bold text-neon-purple">{item.exposure}%</p>
                <div className="mt-3 h-1.5 rounded-full bg-dark-surface overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon-purple/60 to-neon-blue/60" style={{ width: `${item.exposure}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
