import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://packaging-cockpit.matpack.net",
  base: "/",
  integrations: [tailwind(), icon()],
});
