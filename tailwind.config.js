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
      // тёмно-синий корпус: hero и заголовки на светлом, глубже — служебная
      // полоса, лента брендов, шапка и подвал
      navy: {
        DEFAULT: '#1B2A4A',
        light: '#243660',
        strip: '#14203A',
        deep: '#141F35',
        night: '#0C1423',
      },
      // единственный акцент. soft — тот же синий светлее: мелкий текст на
      // тёмно-синем фоне, где основной даёт контраст лишь 3:1
      accent: {
        DEFAULT: '#2D72D2',
        hover: '#245EA8',
        soft: '#6FA6F2',
      },
      graphite: '#2E2E2E', // основной текст
      muted: '#5A5F6B', // второстепенный текст
      mist: '#F4F5F7', // светлые секции, круги под иконки
      line: '#E0E2E6', // границы и разделители
      paper: '#FAFBFC',
      cloud: '#F9FAFB', // секция «О компании»
      sky: {
        DEFAULT: '#3B82F6',
        bg: '#EFF6FF',
      },
      danger: {
        DEFAULT: '#C0392B',
        bg: '#FDECEA',
      },
      success: '#2F7A4F',
    },
    extend: {
      fontFamily: {
        sans: ['"Golos Text"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      maxWidth: {
        content: '1160px',
        wide: '1280px',
      },
      borderRadius: {
        btn: '3px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(27,42,74,0.08)',
        lift: '0 10px 25px rgba(27,42,74,0.12)',
        media: '0 18px 44px rgba(27,42,74,0.18), 0 2px 6px rgba(27,42,74,0.08)',
        menu: '0 10px 40px rgba(0,0,0,0.15)',
        glow: '0 4px 18px rgba(45,114,210,0.45)',
        ring: '0 0 0 3px rgba(45,114,210,0.15)',
        bar: '0 2px 12px rgba(0,0,0,0.06)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, -6px)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'menu-in': 'menu-in 0.25s ease',
        float: 'float 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
