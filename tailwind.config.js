/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "projects/*.html"],

  darkMode: "class",

  theme: {
    fontFamily: {
      notosans: ["NotoSans", "systemui"],
      // systemui: ["system-ui", "sans-serif"],
      // segoe: ["Segoe UI", "serif"],
      // serif: ["DM Sans", "serif"],
    },

    colors: {
      "mainbg-color": "rgb(249, 248, 244)",
      "mainbg-color-dark": "rgb(30, 30, 30)",
      "font-color": "rgb(55, 53, 47)",
      "font-color-dark": "rgb(235, 235, 235)",
      "link-color": "rgb(232, 28, 79)",
      "hover-color": "rgb(108, 117, 125)",
      "tags-color": "rgb(134, 136, 138)",
      "navbar-color": "rgb(244, 242, 233)",
      "navbar-color-dark": "rgb(18, 18, 18)",
      "color-blue": "#55aff9",
      "color-blue-dark": "#146EBE",
      "color-yellow": "#FFD43B",
      "color-yellow-dark": "#FAB005",
      "color-purple": "#B197FC",
      "color-purple-dark": "#6741D9",
      "color-pink": "#E599F7",
      "color-pink-dark": "#9C36B5",
      "color-red-light": "#ffa3a3",
      "color-red": "#FF8787",
      "color-red-dark": "#E03131",
      "color-green": "#63E6BE",
      "color-green-dark": "#0CA678",
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
