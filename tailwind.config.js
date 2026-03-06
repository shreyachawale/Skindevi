/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FCF5F7',
          100: '#F8E8ED',
          200: '#E8A6B6',
          400: '#E8A6B6',
          600: '#D97C96',
          700: '#D97C96',
        },
        gold: {
          400: '#C79A3B',
          500: '#C79A3B',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
