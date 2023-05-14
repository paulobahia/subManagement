/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/**/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: '#DDF9FA',
        itens: {
          primary: '#045256',
          light: '#9AB8BA',
          dark: '#13282B',
        },
        success: {
          light: '#04D361',
          base: '#1B873F',
          low: '#051B0D',
        },
        danger: {
          light: '#F75A68',
          base: '#CC2937',
          low: '#2D090C',
        },
        warning: {
          light: '#FBA94C',
          base: '#EB8A1D',
          low: '#2E1B06',
        },
        new: {
          light: '#1EF7D0',
          base: '#07847E',
          low: '#163840',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
      },
    },
  },
  plugins: [],
}

