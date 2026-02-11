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
          'base-content': '#c7c7c7',
          primary: '#fe514e',
          secondary: '#666666',
          'base-100': '#292929',
          'base-300': '#242424'
        }
      }
    ]
  }
}
