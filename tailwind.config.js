const colors = require('tailwindcss/colors');

module.exports = {
  content: [

  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {

      },
      container: {
        padding: {

        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
