## Provides local search to your documentation site

Uses [Septima Search](https://github.com/Septima/septima-search).

## Installing

```js
npm i vitepress-plugin-septima-search -D
```

## Add the plugin

- Using an vite.config file
```js
//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-septima-search";
import { defineConfig } from "vite";

//default options
var options = {};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});
```

- Using config.js or config.ts
```js
import { SearchPlugin } from "vitepress-plugin-septima-search";
import { defineConfig } from "vitepress";
export default defineConfig({
  vite: { plugins: [SearchPlugin(options)] }
});
```
