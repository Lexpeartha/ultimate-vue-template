// File for setting up whole app
import { ViteSSG } from "vite-ssg";

import App from "./App.vue";
import routes from "./routes";

import "virtual:windi.css";

// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // Function for custom setups
  ctx => {
    // install all plugins from `plugins/`
    Object.values(import.meta.globEager("./plugins/*.ts")).map(i =>
      i.install?.(ctx)
    );
  }
);
