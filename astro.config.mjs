import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://packagingcockpit.matpack.net",
  base: "/",
  integrations: [tailwind(), icon()],
});
