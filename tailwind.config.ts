import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

type ColorType = {
  [key: string]: string;
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", //Enable dark mode using class strategy
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "400px",
        md: "768px",
        lg: "1024.5px",
      },
      /* font-family */
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans"],
        caveat: ["caveat", "sans"],
        playwrite: ["Playwrite", "sans"],
      },

      /* colors */
      colors: {
        "200": "var(--custom-200)",
        "300": "var(--custom-300)",
        "400": "var(--custom-400)",
        "500": "var(--custom-500)",
        "600": "var(--custom-600)",
        "700": "var(--custom-700)",
        "800": "var(--custom-800)",
        "900": "var(--custom-900)",

        bgClr: "var(--bg-clr)",
        "primary-clr": "var(--primary)",
        "secondary-clr": "var(--secondary)",
        "accent-clr": "var(--accent)",
        "bright-clr": "var(--bright)",
        "light-clr": "var(--light)",
      } as ColorType,

      /* animation styles */
      animation: {
        "button-arrow": "animate-button-arrow 1s ease infinite",
        "gradient-animation": "gradient-animation 30s ease infinite",
        "slide-panel": "slide-panel 0.5s linear forwards",
      },

      /* animation keyframes styles */
      keyframes: {
        /*gradient-animation */
        "gradient-animation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-panel": {
          from: { transform: "skewY(180deg)" },
          to: { transform: "skewY(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
