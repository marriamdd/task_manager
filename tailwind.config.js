/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  dark: "class",
  theme: {
    extend: {
      scrollbar: {
        width: "20px",
        height: "20px",
        track: "bg-gray-200",
        thumb: "bg-gray-600",
        hover: {
          thumb: "bg-gray-700",
        },
      },
      colors: {
        contentLight: "#fff",

        purple: "#635FC7",
        medium_Grey: "#828FA3",
      },
      backgroundColor: {
        bodyDarkBG: "#000000",
        lightBG: "#F4F7FD",
        contentDarkBG: "#2B2C37",

        light_purple: "rgba(19, 15, 127, 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
