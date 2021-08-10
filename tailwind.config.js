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
        "dark-grey-active": "var(--dark-grey-active)",
        "antique-white": "var(--antique-white)",
        "floral-white": "var(--floral-white)"
      },
      fill: {
        'transparent': 'transparent',
        "antique-white": "var(--antique-white)",
      },
      stroke:{
        'off-white': "var(--off-white)",
        "antique-white": "var(--antique-white)",
      },
      strokeWidth:{
        '3': '40'
      },
      fontFamily: {
        main: ['Montserrat']
      },
      width:{
        fullscreen: "4000px",
        fit: 'fit-content'
      },
      height:{
        fit: 'fit-content',
        'pgpage': 'calc(100vh - 3rem)',
        '1/2': '50%',
        '55': '55%',
        twoscreen: '200vh',
      },
      minHeight:{
        fit: 'fit-content',
        '2/5': '40%'
      },
      maxHeight:{
        '1/2': '50%',
      },
      backgroundImage:{
        'slide': `linear-gradient(-60deg, black 50%, transparent 50%)`
      },
      animation:{
        wiggle: 'wiggle 1s linear infinite alternate'
      },
      keyframes:{
        wiggle :{
          '0%': {transform : 'translateX(0) transformZ(0)'},
          '100%': {transform: 'translateX(5px)'}
        }
      },
      boxShadow:{
        hard: '0.1rem 0.2rem 5px rgba(0, 0, 0, 0.35)'
      },
      minWidth:{
        'screen' : '100vw',
        'twoscreen': '200vw'
      },
      margin:{
        auto: 'auto'
      },
      borderColor:{
        'off-white-active': 'var(--off-white-active)'
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
