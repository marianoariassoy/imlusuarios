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
          'base-content': '#b1b1b1',
          primary: '#f34643',
          secondary: '#858585',
          'base-100': '#292929',
          'base-300': '#202020'
        }
      }
    ]
  }
}
