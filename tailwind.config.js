module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F9FA',
        'bg-tertiary': '#F0F2F5',
        'text-primary': '#1A1A1A',
        'text-secondary': '#555555',
        'text-muted': '#888888',
        'accent': '#FF3A44',
        'border': '#E5E7EB',
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
