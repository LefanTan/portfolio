module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "deep-blue": "var(--deep-blue)",
        "red": "var(--red)",
        "off-white": "var(--off-white)",
        "off-white-hover": "var(--off-white-hover)",
        "off-white-active": "var(--off-white-active)",
        "dark-green": "var(--dark-green)",
        "dark-grey": "var(--dark-grey)",
        "dark-grey-hover": "var(--dark-grey-hover)",
        "dark-grey-active": "var(--dark-grey-active)"
      },
      fontFamily: {
        main: ['Montserrat']
      },
      width:{
        fullscreen: "4000px"
      }
    },
  },
  variants: {
    scrollSnapType: ['responsive'],
    extend: {
      scale: ['active']
    } 
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
