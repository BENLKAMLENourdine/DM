/** @type {import('tailwindcss').Config} */
import { colors } from './utils/constants'

export default {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

