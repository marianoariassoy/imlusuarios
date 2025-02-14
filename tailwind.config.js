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
          'base-content': '#848484',
          primary: '#f34643',
          secondary: '#666666',
          'base-100': '#212121',
          'base-200': '#303030'
        }
      }
    ]
  }
}
