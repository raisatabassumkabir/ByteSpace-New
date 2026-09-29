/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#3b82f6',
          600: '#1244e8', // Deep royal blue from Figma
          700: '#0e38c9',
          800: '#0a2ca3',
          900: '#061d71',
          DEFAULT: '#1244e8',
          dark: '#081745',
        },
        neon: {
          DEFAULT: '#ccff00', // Electric neon lime/yellow accent
          hover: '#b5e600',
          light: '#f3ffb8',
          dark: '#142100',
          muted: '#e2ff66',
        },
        surface: {
          DEFAULT: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 4px 20px -2px rgba(204, 255, 0, 0.45)',
        'neon-lg': '0 10px 30px -4px rgba(204, 255, 0, 0.55)',
        brand: '0 10px 30px -4px rgba(18, 68, 232, 0.4)',
        card: '0 2px 10px rgba(0, 0, 0, 0.04), 0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
