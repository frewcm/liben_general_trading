import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 35s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#0c416d",
        secondary: "#1ba64b",
        tertiary: "#b6c6d3",
      },
      fontFamily: {
        kanit: ["Kanit", "sans serif"],
      },
    },
  },
  plugins: [],
};
