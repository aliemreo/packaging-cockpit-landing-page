import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://aliemreo.github.io",
  base: "/packaging-cockpit-landing-page",
  integrations: [tailwind(), icon()],
});
