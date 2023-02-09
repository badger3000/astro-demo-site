/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Plus Jakarta Sans"],
      },
      container: {
        center: true,
      },
      screens: {
        "tablet": "640px",
        // => @media (min-width: 640px) { ... }

        "laptop": "1024px",
        // => @media (min-width: 1024px) { ... }

        "desktop": "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "hero-image": "url('./public/images/hero-image.webp')",
      },
    },
  },
  plugins: [],
};
