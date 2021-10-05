module.exports = {
  purge: [
    "docs/*.html"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: { // defaults to these values
    extend:{

   
    textIndent: (theme, { negative }) => ({
      ...{
         sm: '2rem',
         md: '3rem',
         lg: '4rem',
      },
      ...negative({
         sm: '2rem',
         md: '3rem',
         lg: '4rem',
      }),
    }),
  },
 
  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
  },

  plugins: [
    require('tailwindcss-text-indent')(), // no options to configure
    require('@tailwindcss/typography')
  ],
}  
}
