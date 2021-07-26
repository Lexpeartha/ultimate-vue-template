// Vue router is handled behind the scenes
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

// Uses layouts
const routes = setupLayouts(generatedRoutes);

export default routes;
