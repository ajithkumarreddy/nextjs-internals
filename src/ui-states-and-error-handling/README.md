### UI States and Error Handling

**1. Loading UI**

Next.js provides a special `loading.tsx` (or `loading.js`) file to create instant loading states for routes.  
It is automatically wrapped with **React Suspense** and displayed while the route or server data is loading, improving perceived performance during navigation.

**2. React Suspense with Next.js**

**React Suspense** allows you to display a fallback UI while waiting for a component or data to load.  
Next.js integrates Suspense internally to support features like **streaming UI, route loading, and server component data fetching**, enabling smoother user experiences.

Structure:
app 
 ├── dashboard
 │   ├── page.tsx
 │   └── loading.tsx (route loader)
 ├── loading.tsx (global loader)

 **3. error.tsx**

 error.js files automatically create React Error Boundaries that catch errors in a route segment.
 concept: Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree.