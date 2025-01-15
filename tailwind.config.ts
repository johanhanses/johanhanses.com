import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Karla"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Lora"', 'ui-serif', 'Georgia'],
      },
      colors: {
        darkPrimary: '#a6da95',
        darkSecondary: '#f5a97f',
        lightPrimary: '#40a02b',
        lightSecondary: '#ef9f76',
      },
    },
  },
  plugins: [],
} satisfies Config
