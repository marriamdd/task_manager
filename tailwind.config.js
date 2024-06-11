/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBG: "#F4F7FD",
        darkBG: "#2B2C37",
        contentLight: "#fff",
        contentDark: "var(--background)",
        purple: "#635FC7",
        medium_Grey: "#828FA3",
      },
    },
  },
  plugins: [],
};
