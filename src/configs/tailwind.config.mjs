/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [],
};
