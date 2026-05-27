# Copilot Instructions for boda-landing

## Project Overview

**boda-landing** is a wedding landing page built with Vue 3 and Vite. It's a single-page application serving as a marketing/informational site, not a full application with complex business logic.

## Architecture & Key Files

- **Entry point**: `index.html` — Contains single `<div id="app"></div>` mount point
- **Main app**: `src/main.js` — Initializes Vue 3 app and mounts to DOM
- **Root component**: `src/App.vue` — Uses `<script setup>` SFC pattern; imports and renders child components
- **Components**: `src/components/` — Currently has `HelloWorld.vue` with reactive state (count using `ref()`)
- **Styling**: `src/style.css` — Global styles for the landing page
- **Build config**: `vite.config.js` — Minimal Vite config with Vue 3 plugin

## Patterns & Conventions

### Vue 3 `<script setup>` SFC Style
All components use the modern `<script setup>` syntax, not `<script>` with `export default`. Example:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>
```

**Follow this pattern** when creating new components. Do not use Options API style.

### Asset Imports
Static assets (images, SVGs) are imported directly in components:
```javascript
import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vue.svg'
```

Place new images in `src/assets/` and import them this way for proper build optimization.

### Component Structure
- Keep components focused on a single concern
- Use semantic HTML (e.g., `<section>`, `<nav>`, `<button>`)
- Prefer data binding (`@click`, `:src`) over inline event handlers

## Development Workflow

### Commands
- **Development server**: `npm run dev` — Starts Vite dev server with HMR (Hot Module Replacement)
- **Production build**: `npm run build` — Creates optimized `dist/` folder
- **Preview build**: `npm run preview` — Serves the production build locally for testing

### HMR & Testing
Changes to `.vue` files are automatically reflected in the browser. Edit `src/App.vue` or component files and save to see changes instantly.

## Git & Deployment

The repo is configured with GitHub remote at `https://github.com/Mijusk/boda-landing.git`. Standard Git workflow applies.

## Important Notes for AI Agents

1. **Minimal scope**: This is a landing page, not a complex SPA. Avoid over-engineering; keep it simple and performant.
2. **Vue 3 only**: Do not introduce Vue 2 patterns or other frameworks without discussion.
3. **Vite-first**: Leverage Vite's HMR and fast refresh during development; avoid workarounds that bypass the build system.
4. **Component reusability**: As the site grows, extract common UI patterns into reusable components in `src/components/`.
5. **No external auth/API**: Current codebase has no backend integration; any additions should be intentional and documented.
