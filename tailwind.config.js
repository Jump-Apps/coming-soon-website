/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT: "#FFFFFF",
        100: "#FFFFFF10",
        200: "#FFFFFF20",
        300: "#FFFFFF30",
        400: "#FFFFFF40",
        600: "#FFFFFF60",
        800: "#FFFFFF80",
        900: "#FFFFFF90",
      },
      lightBlue: "#6AE4FF",
      darkBlue: "#7FA7FF",
      darkGrey: "#333333",
    },
  },
  plugins: [],
};
