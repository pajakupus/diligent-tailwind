module.exports = {
  content: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width':'width',
        'height': 'height',
        'spacing': 'margin, padding',
       },
       colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          lightest: '#E0D4F3',
          light: '#7557BC',
          DEFAULT: '#503396',
          dark: '#2F1768',
        },
        secondary: {
          DEFAULT: '#F8FAFD'
        },
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus', 'active'],
      width: ['group-hover', 'focus', 'active'],
      height: ['group-hover','focus','active']
    },
  },
  plugins: [
  ],
}

