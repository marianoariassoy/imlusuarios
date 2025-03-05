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
          'base-content': '#ccc',
          primary: '#f34643',
          secondary: '#666',
          'base-100': '#292929',
          'base-300': '#282828'
        }
      }
    ]
  }
}
