/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
        12.5: "3.125rem",
        13: "3.25rem",
      },
      rotate: {
        4.5: "4.5deg",
      },
      borderWidth: {
        5: "5px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
