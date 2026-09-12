/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // намеренно перекрываем дефолтную палитру Tailwind — только фирменные цвета
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      graphite: {
        950: '#080B0E',
        900: '#0E1318',
        850: '#141B21',
        800: '#1B242C',
        700: '#26313B',
        600: '#33414D',
      },
      steel: {
        500: '#5F707D',
        400: '#7E8F9C',
        300: '#A3B1BC',
        200: '#C6D0D7',
        100: '#E2E8EC',
        50: '#F2F5F7',
      },
      ochre: {
        700: '#8F4405',
        600: '#B0570A',
        500: '#C96A0E',
        400: '#E08420',
      },
      signal: {
        red: '#9E2B25',
        green: '#3F6B4F',
      },
    },
    extend: {
      fontFamily: {
        display: ['Archivo', 'Arial Narrow', 'Helvetica Neue', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        wide2: '0.18em',
      },
      maxWidth: {
        grid: '1440px',
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(to right, rgba(126,143,156,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(126,143,156,0.10) 1px, transparent 1px)',
        hatch:
          'repeating-linear-gradient(135deg, rgba(201,106,14,0.16) 0 2px, transparent 2px 9px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 46s linear infinite',
      },
    },
  },
  plugins: [],
}
