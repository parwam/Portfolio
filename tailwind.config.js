/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      systemui: ["system-ui", "sans-serif"],
      segoe: ["Segoe UI", "serif"],
      serif: ["DM Sans", "serif"],
    },

    colors: {
      "mainbg-color": "rgb(251, 251, 250)",
      "font-color": "rgb(55, 53, 47)",
      "link-color": "rgb(232, 28, 79)",
      "hover-color": "rgb(108, 117, 125)",
    },

    extend: {
      height: {
        '128': '600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
