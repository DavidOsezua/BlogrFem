/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        //Primary

        LightRed /*CTA text*/: 'hsl(356, 100%, 66%)',
        VeryLightRed /*CTA hover background*/: 'hsl(355, 100%, 74%)',
        VeryDarkBlue /*headings*/: 'hsl(208, 49%, 24%)',

        //Neutral

        White /*text*/: 'hsl(0, 0%, 100%)',
        GrayishBlue /*footer text*/: 'hsl(240, 2%, 79%)',
        VeryDarkGrayishBlue /*body copy*/: 'hsl(207, 13%, 34%)',
        VeryDarkBlackBlue /*footer background*/: 'hsl(240, 10%, 16%)',
        VeryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        VeryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
