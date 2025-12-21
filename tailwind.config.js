module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0b0f14',
        'bg-secondary': '#0f172a',
        'bg-tertiary': '#111827',
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'accent': '#00d4ff',
        'border': '#1f2a37',
        'dark-bg': '#0b0f14',
        'dark-surface': '#111827',
        'dark-border': '#1f2a37',
        'neon-blue': '#00d4ff',
        'neon-cyan': '#4ef2ff',
        'neon-pink': '#ff4fd8',
        'neon-purple': '#8b5cff',
        'neon-green': '#3dffb6',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '16px',
      }
    },
  },
  plugins: [],
};
