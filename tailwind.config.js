/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, 
        'primary': '#FDC021',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

