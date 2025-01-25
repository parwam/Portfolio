import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import fastGlob from "fast-glob";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// import { imageToWebpPlugin } from 'vite-plugin-image-to-webp';

export default defineConfig({
  root: "src", // Set src/ as the root directory
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Tailwind CSS plugin
        autoprefixer(), // Autoprefixer for cross-browser compatibility
      ],
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpeg: { quality: 100 },
      png: { quality: 100 },
      webp: { quality: 100 },
      avif: { quality: 100 },
    }),
    // imageToWebpPlugin({
    //   filter: (filename) => {
    //     return filename.includes('/public/assets/images'); // Add your directory path here
    //   },
    //   imageFormats: ['jpg', 'jpeg', 'png'],
    //   webpQuality: {},
    //   destinationFolder: 'dist',
    // }),
  ],
  publicDir: "../public",
  build: {
    outDir: "../dist", // Output built files to project/dist
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        fastGlob
          .sync("src/**/*.html", {
            ignore: ["node_modules/**/*", "dist/**/*"], // Exclude unwanted directories
          })
          .map((file) => [file, path.resolve(__dirname, file)])
      ),
      output: {
        manualChunks: undefined,
        entryFileNames: "scripts/[name].min.js", // Disable hashing for JS files
        chunkFileNames: "scripts/[name].min.js",
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return "styles/[name].[ext]"; // Place CSS in styles/ directory
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
