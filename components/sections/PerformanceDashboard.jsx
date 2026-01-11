'use client';

import React from 'react';

export const PerformanceDashboard = () => {
  const metrics = [
    {
      title: 'Total Return',
      value: '+247.3%',
      subtitle: 'Since Inception',
      colorClass: 'text-neon-green',
      trendLabel: 'UPTREND',
      trendClass: 'text-neon-green border-neon-green/30 bg-neon-green/10',
    },
    {
      title: 'Annualized Return',
      value: '34.2%',
      subtitle: '8-Year Average',
      colorClass: 'text-neon-cyan',
      trendLabel: 'STABLE',
      trendClass: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    },
    {
      title: 'Volatility',
      value: '18.5%',
      subtitle: 'Annualized',
      colorClass: 'text-neon-blue',
      trendLabel: 'CONTROLLED',
      trendClass: 'text-neon-blue border-neon-blue/30 bg-neon-blue/10',
    },
    {
      title: 'Sharpe Ratio',
      value: '1.85',
      subtitle: 'Risk-Adjusted Return',
      colorClass: 'text-neon-purple',
      trendLabel: 'ROBUST',
      trendClass: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
    },
  ];

  const linePoints = [
    [0, 140],
    [60, 132],
    [120, 148],
    [180, 118],
    [240, 110],
    [300, 96],
    [360, 88],
    [420, 76],
    [480, 66],
    [540, 52],
    [600, 40],
  ];
  const linePath = linePoints
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x} ${y}`)
    .join(' ');
  const areaPath = `${linePath} L600 160 L0 160 Z`;
  const lastPoint = linePoints[linePoints.length - 1];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan/70 mb-3">
            Institutional Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-4">Performance Metrics</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A consolidated view of return quality, volatility discipline, and risk-adjusted performance
            across the full strategy lifecycle.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="glass neon-border rounded-xl p-6 hover:border-neon-cyan transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">{metric.title}</p>
                <span
                  className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${metric.trendClass}`}
                >
                  {metric.trendLabel}
                </span>
              </div>
              <p className={`text-3xl font-bold mb-2 ${metric.colorClass}`}>
                {metric.value}
              </p>
              <p className="text-xs text-gray-500">{metric.subtitle}</p>
              <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            </div>
          ))}
        </div>

        {/* Equity Curve Placeholder */}
        <div className="glass neon-border rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-neon-blue">Cumulative Performance</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Equity Curve</span>
          </div>

          <div className="relative h-48">
            <svg viewBox="0 0 600 160" className="w-full h-full">
              <defs>
                <linearGradient id="performanceStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ef2ff" />
                  <stop offset="60%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
                <linearGradient id="performanceFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(78,242,255,0.35)" />
                  <stop offset="100%" stopColor="rgba(15,23,42,0)" />
                </linearGradient>
              </defs>
              {[20, 60, 100, 140].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="600"
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="4 6"
                />
              ))}
              <path d={areaPath} fill="url(#performanceFill)" />
              <path d={linePath} fill="none" stroke="url(#performanceStroke)" strokeWidth="3" />
              <circle cx={lastPoint[0]} cy={lastPoint[1]} r="5" fill="#4ef2ff" />
            </svg>
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-xs text-gray-500">
              <span>2017</span>
              <span>2019</span>
              <span>2021</span>
              <span>2023</span>
              <span>2025</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { label: 'MIN', value: '$45,230', color: 'text-neon-cyan' },
              { label: 'CURRENT', value: '$123,450', color: 'text-neon-green' },
              { label: 'MAX', value: '$127,890', color: 'text-neon-pink' },
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-dark-surface/40 border border-white/5 py-3">
                <p className="text-gray-400 text-xs mb-1">{item.label}</p>
                <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Total Trades', value: '2,347', subvalue: 'Closed Positions' },
            { label: 'Win Rate', value: '67.3%', subvalue: '1,579 Winners' },
            { label: 'Profit Factor', value: '2.14x', subvalue: 'Gross Return Ratio' },
          ].map((stat, i) => (
            <div key={i} className="glass neon-border rounded-xl p-6 hover:border-neon-cyan transition-all">
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
