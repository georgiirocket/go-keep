const { heroui } = require('@heroui/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      sm: '400px',
      md: '744px',
      lg: '1000px',
      xl: '1440px',
      '2xl': '1920px',
    },
    colors: {
      mainColor: '#ff6c38',
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
