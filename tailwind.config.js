const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Nanum Myeongjo", ...fontFamily.serif],
      },
      colors: {
        banner: {
          50: "#EAE3DE",
        },
      },
    },
  },
  plugins: [],
};
