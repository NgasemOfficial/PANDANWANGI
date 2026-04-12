/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
    "Project.html",
    "Project2.html",
    "Project3.html",
    "Project4.html",
    "CPPPK.HTML",
    "UI1.html",
    "UI2.html",
    "UI3.html",
    "UI4.html",
    "UI5.html",
    "UI6.html",
    "ADMINDUK.html",
    "SEKRETARIAT.html",
    "kesra-kia.html",
    "kesra-haji.html",
    "kesra-ahwar.html",
  ],
  theme: {
    screens: {
      'xs': '750px',
      'sm': '850px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1100px) { ... }
      'xl': '1250px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
}

