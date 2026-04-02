/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'felipino-dark': '#0a0a0a',
        'felipino-darker': '#050505',
        'felipino-orange': '#FF6B35',
        'felipino-orange-light': '#FF8C5A',
        'felipino-yellow': '#FFD166',
        'felipino-gray': '#1A1A1A',
        'felipino-gray-light': '#2D2D2D',
      },
      fontFamily: {
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'bold': ['Oswald', 'Impact', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
