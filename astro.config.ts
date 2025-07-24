// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from "@playform/compress";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress({
      CSS: false,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
    }),
    compressor({
      fileExtensions: [".html", ".css", ".js", ".cjs", ".mjs", ".svg", ".xml"],
      gzip: true,
      brotli: true,
    }),
  ],

  prefetch: {
    // Automatically prefetch all links once the page loads.
    // (If you prefer hover-only, set this to false and add data-astro-prefetch on each <a>.)
    prefetchAll: false,

    // Optionally override the default strategy for links without an explicit value.
    // defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  trailingSlash: "always",
  output: "static",

  build: {
    assets: "resources",
  },
});
