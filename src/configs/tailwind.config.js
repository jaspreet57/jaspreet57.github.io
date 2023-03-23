/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme.js";
import preline from "preline/plugin.js";

export default {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // custom fonts imported in layouts/MainLayout.astro
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // custom color variables defined in styles/variables.css
        base: {
          default: "var(--color-base)",
          v1: "var(--color-base-v1)",
          v2: "var(--color-base-v2)",
          v3: "var(--color-base-v3)",
          v4: "var(--color-base-v4)",
          iv1: "var(--color-base-iv1)",
          iv2: "var(--color-base-iv2)"
        },
        primary: {
          default: "var(--color-primary)",
          v1: "var(--color-primary-v1)",
          v2: "var(--color-primary-v2)",
          v3: "var(--color-primary-v3)",
          v4: "var(--color-primary-v4)",
          iv1: "var(--color-base-iv1)",
          iv2: "var(--color-base-iv2)"
        },
        fill: {
          default: "var(--color-fill)",
          v1: "var(--color-fill-v1)",
          v2: "var(--color-fill-v2)",
        },
        paper: {
          default: "var(--color-paper)",
          v1: "var(--color-paper-v1)",
          v2: "var(--color-paper-v2)",
        }
      },
    },
  },
  plugins: [preline],
};
