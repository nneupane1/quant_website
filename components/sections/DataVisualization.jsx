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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Live Signal Scores</h3>
        
        <div className="space-y-4">
          {data.map((item, i) => (
            <div key={i} className="glass neon-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <h4 className="font-bold text-lg">{item.label}</h4>
                  <span className={`text-sm font-medium px-3 py-1 rounded ${
                    item.status === 'buy' ? 'bg-green-500/20 text-green-300' :
                    item.status === 'sell' ? 'bg-red-500/20 text-red-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <span className={`text-lg font-bold ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {item.change}
                </span>
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
                <span>Confidence</span>
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
            <div key={i} className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-neon-cyan">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
