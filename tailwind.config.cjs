/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '376px'
      }
    },
  },
  plugins: [],
}
