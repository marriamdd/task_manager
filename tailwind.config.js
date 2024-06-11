/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  dark: "class",
  theme: {
    extend: {
      colors: {
        lightBG: "#F4F7FD",
        contentDarkBG: "#2B2C37",
        contentLight: "#fff",

        purple: "#635FC7",
        medium_Grey: "#828FA3",
        bodyDarkBG: "#000000",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
