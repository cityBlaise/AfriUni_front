/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        '4xs':'290px',
        '3xs':'300px',
        '2xs':'420px',
      'xs':'560px',
      },
      fontFamily:{
        'Monoid':['Monoid']
      },
    },
  },
  plugins: [],
}