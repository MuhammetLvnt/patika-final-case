/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    transitionDuration: {
      1300: "1300ms",
    },
    fontFamily: {
      bruno: ["Bruno Ace SC"],
    },
  },
  plugins: [],
};
