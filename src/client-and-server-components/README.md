### Data fetching

**Overview**

Next.js uses React Server Components (RSC) to render parts of the UI on the server and ship HTML to the client. This enables fast initial loads and lets you fetch data on the server without shipping extra JavaScript.

**1. Server Components**

- A Server Component runs on the server and returns HTML to the browser. It can fetch data directly (using `fetch`, database calls, or other server APIs) and is ideal for non-interactive UI.
- Benefits: smaller client bundles, better SEO, and simpler data fetching without client-side effects.

When to use:
- Fetching data that doesn't require client interactivity.
- Rendering content that can be static or server-driven.

Key rules:
- Server Components can render Client Components (to delegate interactivity).
- Client Components cannot import Server Components.

**Selective Hydration (concept)**

- Next.js hydrates only the interactive parts of the page (Client Components), leaving server-rendered HTML as-is for non-interactive parts. This reduces the amount of JavaScript run on the client and improves performance.

**2. Client Components**
- Mark a component with `"use client"` to make it a Client Component. These run in the browser, include JavaScript, and support event handlers, state, and browser-only APIs.
- Use Client Components for interactivity (buttons, forms, client-only state).
- If a component uses "use client": All its children automatically become client components.

### When to use Client Components

Use Client Components when a component requires browser-only behavior or interactivity. Common cases:

- State: `useState`, `useReducer`
- Effects: `useEffect`, lifecycle-like effects
- Event handlers: `onClick`, `onSubmit`, etc.
- Browser APIs: `localStorage`, `sessionStorage`, `window`, `document`
- Animations: Framer Motion, complex CSS/JS animations
- Interactive forms: client-side validation and dynamic form behavior

### When to use Server Components

Prefer Server Components for server-driven rendering and data work where client-side JS isn't needed:

- Data fetching: calling external APIs and aggregating data on the server
- Database queries: Prisma, MongoDB, or other backend DB calls
- Static content: blog posts, changelogs, or mostly-static pages
- SEO-critical pages: landing pages and content that benefits from server-rendered HTML
