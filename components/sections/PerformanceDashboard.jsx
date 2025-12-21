'use client';

import React from 'react';

export const PerformanceDashboard = () => {
  const metrics = [
    {
      title: 'Total Return',
      value: '+247.3%',
      subtitle: 'Since Inception',
      colorClass: 'text-neon-green',
      trend: 'up',
    },
    {
      title: 'Annualized Return',
      value: '34.2%',
      subtitle: '8-Year Average',
      colorClass: 'text-neon-cyan',
      trend: 'up',
    },
    {
      title: 'Volatility',
      value: '18.5%',
      subtitle: 'Annualized',
      colorClass: 'text-neon-blue',
      trend: 'down',
    },
    {
      title: 'Sharpe Ratio',
      value: '1.85',
      subtitle: 'Risk-Adjusted Return',
      colorClass: 'text-neon-purple',
      trend: 'up',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-neon-cyan">Performance Metrics</h2>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="glass neon-border rounded-xl p-6 hover:border-neon-cyan transition-all"
            >
              <p className="text-gray-400 text-sm mb-2">{metric.title}</p>
              <p className={`text-3xl font-bold mb-2 ${metric.colorClass}`}>
                {metric.value}
              </p>
              <p className="text-xs text-gray-500">{metric.subtitle}</p>
              {metric.trend === 'up' && (
                <div className="mt-4 h-1 bg-gradient-to-r from-neon-green/50 to-neon-green rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Equity Curve Placeholder */}
        <div className="glass neon-border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6 text-neon-blue">Cumulative Performance</h3>
          
          {/* Simple ASCII-style chart */}
          <div className="space-y-2 font-mono text-xs text-neon-cyan/70">
            <div className="flex items-end gap-1 h-48">
              {[2, 4, 5, 7, 6, 8, 9, 11, 13, 15, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-neon-cyan to-neon-blue rounded-t opacity-80 hover:opacity-100 transition"
                  style={{ height: `${height * 8}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <p className="text-gray-400 text-xs mb-1">MIN</p>
              <p className="text-lg font-bold text-neon-cyan">$45,230</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">CURRENT</p>
              <p className="text-lg font-bold text-neon-green">$123,450</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">MAX</p>
              <p className="text-lg font-bold text-neon-pink">$127,890</p>
            </div>
          </div>
        </div>

        {/* Trade Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Total Trades', value: '2,347', subvalue: 'Closed Positions' },
            { label: 'Win Rate', value: '67.3%', subvalue: '1,579 Winners' },
            { label: 'Profit Factor', value: '2.14x', subvalue: 'Gross Return Ratio' },
          ].map((stat, i) => (
            <div key={i} className="glass neon-border rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-3">{stat.label}</p>
              <p className="text-3xl font-bold text-neon-cyan mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.subvalue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
