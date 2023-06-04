import { defineConfig } from "astro/config";
import image from "@astrojs/image";
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import { SITE } from "./page.config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: { path: "src/configs/tailwind.config.js" }, // custom path to a Tailwind config file
    }),
    image(),
    // sitemap(), // todo
  ],
});
