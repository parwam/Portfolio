/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html'
  ],

  darkMode: "class",

  theme: {
    fontFamily: {
      systemui: ["system-ui", "sans-serif"],
      segoe: ["Segoe UI", "serif"],
      serif: ["DM Sans", "serif"],
    },

    colors: {
      "mainbg-color": "rgb(249, 248, 244)",
      "mainbg-color-dark": "rgb(30, 30, 30)",
      "font-color": "rgb(55, 53, 47)",
      "font-color-dark": "rgb(235, 235, 235)",
      "link-color": "rgb(232, 28, 79)",
      "hover-color": "rgb(108, 117, 125)",
      "navbar-color": "rgb(244, 242, 233)",
      "navbar-color-dark": "rgb(18, 18, 18)",
    },

    extend: {
      height: {
        128: "600px",
      },
    },
  },

  plugins: [require("@tailwindcss/aspect-ratio")],
};
