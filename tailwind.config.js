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
      // чёрный корпус: 950 — подвал и служебная полоса, 900 — тёмные секции,
      // 800–600 — границы и подложки
      ink: {
        950: '#000000',
        900: '#070709',
        850: '#0D0E11',
        800: '#141519',
        700: '#1F2127',
        600: '#2B2E36',
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
      // синий акцент. 500 — кнопки и полосы, 400 — мелкий текст и ссылки
      // на чёрном: на нём 500 уже теряет читаемость
      accent: {
        700: '#163B96',
        600: '#1E4FC4',
        500: '#2E63E8',
        400: '#6AA0FF',
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
