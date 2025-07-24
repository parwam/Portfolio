/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "460px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      systemui: ["system-ui", "sans-serif"],
      // 'serif': ["DM Sans", "serif"],
      // 'opensans': ["Open Sans", "system-ui"],
      // notoserif: ["NotoSerif", "sans-serif", "system-ui"],
      tiempostext: ["TiemposText", "opensans", "sans-serif", "system-ui"],
    },

    extend: {
      height: {
        128: "600px",
      },

      borderWidth: {
        6: "6px",
      },

      maxWidth: {
        mdsm: "344px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
