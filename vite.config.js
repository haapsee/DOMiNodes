// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@dominodes": resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable Library Mode
    lib: {
      // Point this to your main index.ts file
      entry: resolve(__dirname, "index.js"),

      // The global variable name if someone includes your library via a <script> tag
      name: "dominodes",

      // The name of the output files
      fileName: (format) => `index.${format}.js`,
    },
    // Optional: Minify the output to make the file size smaller
    minify: "terser",
  },
});
