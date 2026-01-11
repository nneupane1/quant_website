'use client';

import React from 'react';

export const DataVisualization = () => {
  const data = [
    { label: 'BTC/USDT', value: 8.5, change: '+12.5%', status: 'buy' },
    { label: 'ETH/USDT', value: 7.2, change: '+8.3%', status: 'buy' },
    { label: 'SPY', value: 6.8, change: '+5.1%', status: 'hold' },
    { label: 'QQQ', value: 5.9, change: '-2.3%', status: 'sell' },
    { label: 'GLD', value: 4.3, change: '+1.8%', status: 'hold' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan/70 mb-3">Signal Intelligence</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">Live Signal Scores</h3>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A live signal matrix calibrated for directional conviction, regime alignment, and execution readiness.
          </p>
        </div>

        <div className="space-y-4">
          {data.map((item, i) => (
            <div key={i} className="glass neon-border rounded-xl p-6 hover:border-neon-cyan transition-all">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <h4 className="font-bold text-lg">{item.label}</h4>
                  <p className="text-xs text-gray-500">Signal confidence</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      item.status === 'buy'
                        ? 'border-green-400/40 bg-green-500/10 text-green-300'
                        : item.status === 'sell'
                        ? 'border-red-400/40 bg-red-500/10 text-red-300'
                        : 'border-yellow-400/40 bg-yellow-500/10 text-yellow-300'
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>

              {/* Score Bar */}
              <div className="w-full bg-dark-surface rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink transition-all duration-300"
                  style={{ width: `${item.value * 10}%` }}
                />
              </div>

              {/* Score Label */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Confidence Index</span>
                <span>{item.value.toFixed(1)}/10</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloomberg-style Stats Footer */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-dark-border pt-8">
          {[
            { label: 'Win Rate', value: '67.3%' },
            { label: 'Profit Factor', value: '2.14' },
            { label: 'Sharpe Ratio', value: '1.89' },
            { label: 'Max Drawdown', value: '-12.5%' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-dark-surface/40 border border-white/5 p-4 text-center">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-neon-cyan">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
