import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F1',
        paper: '#F1E9D8',
        ink: '#2B241C',
        gold: '#A67C3D',
        goldLight: '#C9A465',
        oxblood: '#7A2331',
        line: 'rgba(43,36,28,0.12)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        deva: ['var(--font-devanagari)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
