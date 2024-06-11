/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBG: "var(--background)",
        darkBG: "var(--background)",
      },
    },
  },
  plugins: [],
};
