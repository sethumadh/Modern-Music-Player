/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width')

module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    percentageWidth ,
  ],
}
