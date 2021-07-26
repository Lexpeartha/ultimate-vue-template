import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
  plugins: [
    Vue(),
    ViteComponents({
      // Relative paths to the directory to search for components.
      dirs: ["src/components"],

      // Valid file extensions for components.
      extensions: ["vue"],

      // Search for subdirectories
      deep: true,

      // Generate `components.d.ts` global declrations,
      // also accepts a path for custom filename
      globalComponentsDeclaration: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,

      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
    }),
    Pages({
      // Will make some pages special like in Nuxt, for example: index.vue and [id].vue
      nuxtStyle: true,

      // Path to the folder pages will be based off of
      pagesDir: "src/pages",

      // Async importing of all pages
      importMode: "async",
    }),
    Layouts(),
    WindiCSS({
      // This configuration is needed for `scoped` styles to work
      transformCSS: "pre",
    }),
  ],
});
