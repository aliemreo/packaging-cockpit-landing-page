/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        brand: {
          teal:  "#0F766E",
          navy:  "#1E3A8A",
          amber: "#F59E0B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
