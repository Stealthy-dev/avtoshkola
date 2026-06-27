/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF5C1A', light: '#FFF0EA', dark: '#D94A10' },
        brand: {
          dark: '#1A1A2E',
          dark2: '#2D2D44',
          bg: '#F4F4F5',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
};
