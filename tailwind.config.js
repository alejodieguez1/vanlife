/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.liquid"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        body: "Mori Regular",
        "body-bold": "Mori Semibold",
        heading: "Editorial",
        rod: "Rod",
      },
      colors: {
        gold: "#FFBD17",
        "gray-bg": "#F8F8F8",
        "dark-gray": "#555555",
        grass: "#BBBEA9",
        cloud: "#F5F4F0",
        chocolate: "#BCAB99",
        cream: "#F0EDE7",
        "skin-orange": "#E2BD92",
      },
    },
  },
};
