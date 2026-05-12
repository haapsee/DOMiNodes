import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@dominodes": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "index.js"),
        button: resolve(__dirname, "src/components/button/index.js"),
        box: resolve(__dirname, "src/components/box/index.js"),
        main: resolve(__dirname, "src/components/domi-main.js"),
        badge: resolve(__dirname, "src/components/badge/index.js"),
        card: resolve(__dirname, "src/components/card/index.js"),
        form: resolve(__dirname, "src/components/form/index.js"),
        input: resolve(__dirname, "src/components/input/index.js"),
      },
      name: "dominodes",

      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
    minify: "terser",
  },
});
