/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' // Todos os arquivos tsx possuiram a estilização do tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
    },
  },
  plugins: [],
}
