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
        ubuntu: ["Ubuntu", "sans"],
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
        "mobile-menu-clr": "var(--mobile-menu-clr)",
      } as ColorType,

      /* animation styles */
      animation: {
        "sticky-nav":
          "sticky-nav 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "gradient-animation": "gradient-animation 30s ease infinite",
        "slide-panel": "slide-panel 0.5s linear forwards",
      },

      /* animation keyframes styles */
      keyframes: {
        /* sticky-nav animation */
        "sticky-nav": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.5)",
          },
        },
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
