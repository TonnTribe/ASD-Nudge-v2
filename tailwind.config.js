/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./views/*.{handlebars,html,js}", "./views/layouts/*.{handlebars,html,js}"],
  theme: {
    extend: {      
      fontFamily: {sans: ['Inter var', ...defaultTheme.fontFamily.sans],},
  },
  plugins: [],
}
}