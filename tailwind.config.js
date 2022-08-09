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
        lim: ["Lim", "sans-serif"],
        gabia: ["Gabia", "sans-serif"],
        dalseo: ["Dalseo", "sans-serif"],
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
