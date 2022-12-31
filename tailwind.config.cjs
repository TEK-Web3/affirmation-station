/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        affirmationDark: {
          "base-100": "#2B2C38",
          "base-200": "#191A23",
          "base-300": "#46474F",
          "base-400": "#464754",
          info: "#6DDCEB",
          success: "#93E2B3",
          warning: "#E3D4A1",
          error: "#FD746A",
          active: "#191A23",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
