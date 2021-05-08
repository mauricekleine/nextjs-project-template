const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: "jit", // experimental, API might change in the future
  plugins: [],
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
};
