/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      },
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        brend: {
          'white': '#F2FFFC',
          'black': '#03090C',
          'ellips': '#F2FFFC',
          'liner-0': '#3A242C',
          'liner-50': '#72A6F4',
          'liner-100': '#20B45B',
          'cyan': '#DEF4E9',
          'cyan-100': '#A4FFE4',
          'darkcyan': '#305F50',
          'green': '#0D2B24',
          'green-100': '#069D6E',
          'darkgreen': '#082E1B',
          'bgreen': '#3B6A5B',
          'gray': '#101520',
          'gray-100': '#4B5563',
          'white-100': '#EDEEF3',
        },
      },
      backgroundImage: {
        'imgLight': "url('./public/img/hero-light-bg.webp')",
        'imgDark': "url('./public/img/hero-bg.webp')"
      }
    },
  },
  plugins: [],
}

