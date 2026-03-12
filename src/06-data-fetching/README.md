### Data fetching

Data fetching in the Next.js App Router is primarily performed inside **Server Components**. Server components
run on the server, allowing them to load data before sending the HTML to the client. The framework enhances the
native fetch API with caching, revalidation, deduplication, and integrates seamlessly with streaming and error
handling.

#### 1. Basic Fetch in Server Components

- Server Components can use fetch directly and may be defined as `async`.
- Fetching occurs on the server so data is available before rendering.

Next.js adds:
- automatic caching of responses,
- revalidation to refresh cached data,
- request deduplication to merge identical calls.

#### 2. Async Server Components

- Server components may be declared `async` to await data.
- This enables waiting for API responses or database queries before rendering.
- Async components are only allowed on the server; client components cannot be async and typically fetch data
  with client-side techniques.

#### 3. Streaming UI

Streaming lets parts of a page render as their data becomes ready.

- **loading.tsx**: route‑level or layout‑level loading UI shown during navigation until data resolves.
- **`<Suspense>`**: component‑level streaming with customizable fallbacks.
  - Multiple components can load independently.
  - Improves perceived performance by rendering the page shell first.

#### 4. Parallel Data Fetching

- Initiate several requests at once to reduce overall latency.
- Useful when components depend on different data sources.

#### 5. Request Deduplication

- Identical fetch calls during the same render cycle are combined.
- Result is shared across components, avoiding duplicate network traffic.

#### 6. Error Handling

- Use an `error.tsx` file at a route segment to display a fallback UI on errors.
- Acts as an error boundary for rendering or data fetching failures.
