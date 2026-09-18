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
      // тёмно-синий корпус
      navy: {
        950: '#050B18',
        900: '#0A1428',
        850: '#0F1B33',
        800: '#152340',
        700: '#203157',
        600: '#2E4270',
      },
      // холодные серые с синим подтоном — текст и линии на светлых секциях
      steel: {
        500: '#5E6E88',
        400: '#7D8CA6',
        300: '#A2AFC4',
        200: '#C5CFDD',
        100: '#E1E7F0',
        50: '#F2F5FA',
      },
      // акцент
      ochre: {
        700: '#9A4A07',
        600: '#C25E0B',
        500: '#E87511',
        400: '#FF9330',
      },
      signal: {
        red: '#C0392B',
        green: '#3F7A5A',
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
          'linear-gradient(to right, rgba(125,140,166,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,140,166,0.12) 1px, transparent 1px)',
        hatch:
          'repeating-linear-gradient(135deg, rgba(232,117,17,0.16) 0 2px, transparent 2px 9px)',
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
