import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Epilogue', 'sans-serif'],
      'mono': ['"Fira Code"', 'mono']
    },
    colors: {
      'gold': '#CF9D3E',
      'white': '#F4F4F4',
      'light': '#858CB2',
      'medium': '#384178',
      'dark': '#182150',
      'black': '#050A26'
    },
    extend: {
      spacing: {
        '15vw': '15vw',
        '70vh': '70vh',
        '1/7': '13.5%'
      }
    }
  },
  plugins: [],
}
export default config
