/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  dark: "class",
  theme: {
    extend: {
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
