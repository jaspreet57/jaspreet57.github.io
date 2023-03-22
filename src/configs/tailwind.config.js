/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme.js";
import preline from "preline/plugin.js";

export default {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // custom fonts imported in layouts/MainLayout.astro
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // custom color variables defined in tailwind-styles/variables.css
        base: "var(--color-base)",
        h1: "var(--color-h1)",
        h2: "var(--color-h2)",
        h3: "var(--color-h3)",
        h4: "var(--color-h4)",
        primary: "var(--color-primary)",
        fill: "var(--color-fill)",
        paper: "var(--color-paper)",
      },
    },
  },
  plugins: [preline],
};
