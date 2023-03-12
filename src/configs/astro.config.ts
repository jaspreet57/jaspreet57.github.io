import { defineConfig } from "astro/config";
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jaspreet-singh.com/",
  integrations: [
    tailwind({
      config: { path: 'src/configs/tailwind.config.mjs' }, // custom path to a Tailwind config file
    }),
    // sitemap(), // todo
  ],
});
