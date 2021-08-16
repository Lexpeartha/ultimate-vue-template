# Ultimate Vue Template (very opinionated)

One template to rule them all (not really :P)
Powered by a bunch of awesome plugins, tailored to make creating your next server-side generated Vue 3 app a breeze

#### This project template includes following features:

:airplane: **Vue 3 and Vite 2** - *Allowing you to develop at speed of light*

:card_index_dividers: **File based routing** - *follow best practices and keep everything organized*

:package: **Components auto importing** - *Remove unnecessary boilerplate*

:bookmark_tabs: **Layout system** - *Style parts of your app differently*

:art: **Windi CSS** - *Utility-first CSS framework for making UIs fast*

#### Inspirations for this repo
- [Vitesse](https://github.com/antfu/vitesse)
- [Nuxt.js](https://github.com/nuxt/nuxt.js)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)(IDE) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)(Extension)
Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

## Type Support For `.vue` Imports in TS

Vetur has a good support for `.vue` components as of recently, if they are imported directly in `<script>` tag. However, since components in this setup are auto-imported, If you want to have support for auto-imported components, [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) will recognize `components.d.ts` file generated at the root of the project which will provide type definitions (I chose to opt-out that file from version control, but you can make that decision for yourself)

#### To Properly Configure TS version

1. Open `src/main.ts` in VSCode
2. Open the VSCode command palette
3. Search and run "Select TypeScript version" -> "Use workspace version"

## How to use this repo

#### File based routing, auto-importing components & layout

File based routing & auto-importing of components are very similar to the way [Framework Nuxt.js](https://github.com/nuxt/nuxt.js) handles them, that I'll link it's documentation, and just explain differences:

- [routing](https://nuxtjs.org/docs/2.x/features/file-system-routing)
- [components](https://nuxtjs.org/docs/2.x/features/nuxt-components)
- [layouts](https://nuxtjs.org/docs/2.x/components-glossary/pages-layout)

**Differences:**

- Dynamic routes are written like `[id].vue` instead of `_id.vue`(feature for support of underscore is still experimental in one of the plugins)
- Components are also auto imported in other components, not just the pages
- You can override route object with custom `<route>` block inside pages, and one of it's properties `layout` will wrap the page with the component of the same name, as the value of that property that's found in `layouts` folder

#### NPM commands

- Spin up development server `npm run dev`
- Bundle app for production `npm run build` which will generate `dist` folder
- Preview generated production-ready app `npm run preview`


##### Contributions are welcome!