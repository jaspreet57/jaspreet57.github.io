// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap"; // todo

// https://astro.build/config
export default defineConfig({
  site: "https://www.jsingh.me/",
  integrations: [tailwind()]
});