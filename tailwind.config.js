const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        serif: ["Ubuntu", ...defaultTheme.fontFamily.sans]
      },
      height: {
        "(almost)": "77vh"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
