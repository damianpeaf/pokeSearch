/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bug': '#3B9950',
        'dark': '#5A5979',
        'dragon': '#61CAD9',
        'electric': '#FBFB72',
        'fairy': '#EA1369',
        'fighting': '#EF6138',
        'fire': '#FD4C5A',
        'flying': '#93B2C7',
        'ghost': '#906790',
        'grass': '#27CB4F',
        'ground': '#6E491F',
        'ice': '#D8F0FA',
        'normal': '#CA98A7',
        'poison': '#9B69D9',
        'psychic': '#F81C91',
        'rock': '#8B3E21',
        'steel': '#42BD94',
        'water': '#86A8FC',
      }
    }
  },
  plugins: [],

}
