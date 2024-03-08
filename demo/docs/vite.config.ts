import { SearchPlugin } from "vitepress-plugin-septima-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    SearchPlugin(),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});
