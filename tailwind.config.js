/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'lightGray': ' hsl(0, 0%, 98%)',
        'darkGray': 'hsl(0, 0%, 52%)',
        'white':'hsl(0, 0%, 100%)',
        'darkBlueText':'hsl(200, 15%, 8%)',
        'darkBlueBg':' hsl(207, 26%, 17%)',
        'darkBlueEl':' hsl(209, 23%, 22%) '
      },
    },
  },
  plugins: [],
}
