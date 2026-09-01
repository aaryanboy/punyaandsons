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
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        deva: ['"Noto Serif Devanagari"', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;
