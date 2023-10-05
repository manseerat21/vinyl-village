import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-bg1' : '#F7EAC8',
        'secondary-bg1' : '#E5DFD4',
        'accent1' : '#FF7171',
        
        'primary-bg2' : '#CCE1D1',
        'secondary-bg2' : '#E9F4E5',
        'accent2' : '#FFCDA8',
        
        'primary-bg3' : '#FFEDD1',
        'secondary-bg3' : '#C7B198',
        'accent3' : '#FF9A8B',
      },
      textColor: {
        'primary-text1' : '#463F3A',
        'secondary-text1' : '#A6937C',
        'accent1' : '#FF7171',

        'primary-text2' : '#332F2E',
        'secondary-text2' : '#7E8E99',
        'accent2' : '#FFCDA8',

        'primary-text3' : '#4A4238',
        'secondary-text3' : '#8C7A6D',
        'accent3' : '#FF9A8B',
      }
    },
  },
  plugins: [],
}
export default config
