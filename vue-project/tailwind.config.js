const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary": "#F5F6F3",
        "primary_light": "#FDFDFC",
        "secondary": "#546E6D",
        "accent": "#172120",
        "secondary_light": "#A9BBBB",
        "grey": "#303538",
        "grey_light": "#596665",
      },
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    container: {
      padding: "10px",
      center: true,
      maxwidth: "none",
    },
    screens: {
      xs: "395px",
      sm: "640px",
      md: "768px",
      xmd: "846px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

