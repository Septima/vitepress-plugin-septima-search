import { defineConfig } from "vitepress";

export default defineConfig({
  outDir: "./.vitepress/out",
  base: "/test/",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://search.cdn.septima.dk/5.57.22/css/defaultView.css' }],
    ['script', { src: 'https://search.cdn.septima.dk/5.57.22/septimasearch.min.js' }],
  ]
  // themeConfig: {
  //   search: {
  //     provider: 'local'
  //   }
  // }
  // srcExclude: ["subfolder"],
});
