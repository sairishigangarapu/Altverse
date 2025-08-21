/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'graphite': '#0B0E0F',
        'onyx': '#111417',
        'gunmetal': '#161A1D',
        'neon-mint': '#33FFB4',
        'teal-glow': '#00E6C3',
        'soft-white': '#EAF7F3',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'press-start': ['Press Start 2P', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
