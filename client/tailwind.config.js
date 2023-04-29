const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1280px'
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        ...fontFamily
      },
    },
    colors: {
      'orange': '#F9A260',
      'orange-dark': '#F48634',
      'black': '#16191D',
      'gray': '#949597',
      'gray-dark': '#373737',
      ...colors
    }
  },
  plugins: [],
}
