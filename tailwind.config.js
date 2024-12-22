/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1570EF',
        secondary: '#F5F5F5',
        'primary-text': '#181D27'
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'], // Primary font
        secondary: ['Satoshi', 'sans-serif'], // Secondary font
      },
    },
  },
  plugins: [],
}