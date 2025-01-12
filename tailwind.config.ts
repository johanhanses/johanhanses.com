import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Karla"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Lora"', 'ui-serif', 'Georgia'],
      },
      colors: {
        primary: '#a6da95',
        secondary: '#f5a97f',
      },
    },
  },
  plugins: [],
} satisfies Config
