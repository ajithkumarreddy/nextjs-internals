### UI States and Error Handling

**Overview**
- Clear, resilient UI requires handling loading states and runtime errors at both route and app levels. This document explains Next.js patterns for `loading.tsx`, React Suspense integration, route `error.tsx`, and `global-error.tsx`.

**1. Loading UI**

Next.js supports a special `loading.tsx` (or `loading.js`) file to provide instant, route-level loading states. These loaders are rendered automatically while a route or server data is loading and are integrated with React Suspense to improve perceived performance during navigation.

Placement examples:
ßs̄
app/
├─ dashboard/
│  ├─ page.tsx
│  └─ loading.tsx    (route-level loader)
└─ loading.tsx        (global loader shown for top-level navigation)

**2. React Suspense with Next.js**

React Suspense lets you declare fallbacks while awaiting UI or data. Next.js leverages Suspense for features such as streaming UI, route-level loading, and server-component data fetching. Use Suspense-friendly patterns in components to make loading transitions smooth and predictable.

**3. Route-level errors — `error.tsx`**

- A route `error.tsx` acts as a React Error Boundary for its segment and renders when children throw during render, lifecycle, or effects.
- If your `error.tsx` uses the `reset()` callback or client-only hooks, make it a client component by including `'use client'` at the top.
- Behavior: the file receives information about the error and can offer retry UI that calls `reset()` to attempt re-rendering the segment.

Example:

`app/dashboard/error.tsx` — catches errors under the `/dashboard` segment and provides localized recovery UI.

**4. App-wide errors — `global-error.tsx`**

Place `global-error.tsx` at the top-level `app/` to catch errors across the entire application. This is useful when you want a single centralized error UI instead of per-route boundaries.

**5. Error Boundary concept (quick primer)**

- Error Boundaries are React components that catch JavaScript errors anywhere in their child tree, log those errors, and display a fallback UI instead of the component tree that crashed.
- Use route `error.tsx` for segment-scoped boundaries and `global-error.tsx` for app-wide coverage.