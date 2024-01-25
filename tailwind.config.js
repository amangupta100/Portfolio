/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      'mtb': {'max': '880px'},
      'tb': {'max': '768px'},
      'lm': {'max': '426px'},
      'mdm': {'max': '375px'},
      'sm': {'max': '320px'},
    },
  },
  plugins: [],
}

