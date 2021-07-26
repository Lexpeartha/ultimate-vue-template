import { UserPlugin } from "~/types";
import { createHead } from "@vueuse/head";

export const install: UserPlugin = ({ app }) => {
  const head = createHead();

  app.use(head);
};
