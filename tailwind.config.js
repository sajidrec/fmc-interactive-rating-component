/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        "desktop":"375px"
      },
      colors:{
        "primary-Orange":"hsl(25, 97%, 53%)",
        "primary-Light-Grey": "hsl(217, 12%, 63%)",
        "primary-Medium-Grey": "hsl(216, 12%, 54%)",
        "primary-Dark-Blue": "hsl(213, 19%, 18%)",
        "primary-Very-Dark-Blue": "hsl(216, 12%, 8%)"
      },
      fontFamily:{
        overpass:["Overpass"]
      }
    },
  },
  plugins: [],
}

