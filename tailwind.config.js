/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#e4e3e3',
          primary: '#fe514e',
          secondary: '#999999',
          tertiary: '#666666',
          'base-100': '#292929',
          'base-300': '#242424'
        }
      }
    ]
  }
}
