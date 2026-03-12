### Caching and Revalidation

- The App Router in Next.js includes a built-in caching layer that handles data fetching for you. Knowing how the `fetch` API is cached and when to trigger a revalidation can greatly improve performance and reduce unnecessary network traffic.
- This caching applies only on the server, not on client side.

## 1. Fetch Caching (Default Behavior)

By default, any call to `fetch` inside a **server component** is **cached automatically**. This acts like the browser’s `force-cache` option and follows these steps:

1. The server makes the request and receives the response.
2. Next.js saves the response in its internal cache.
3. Later requests for the same URL return the cached response instead of re‑fetching from the network.

Under the hood, the default is equivalent to:

```js
fetch(url, { cache: "force-cache" });
```

## 2. `force-cache`

- Instructs Next.js to **always cache** the response.
- Cached data is reused even if the page re‑renders.
- Ideal for mostly static content such as blog posts, documentation, or product details.

## 3. `no-store`

- Disables caching entirely.
- Every request hits the upstream API to fetch fresh data.
- Use this for highly dynamic data like dashboards, stock prices, user-specific information, or live notifications.

## 4. Revalidation (Incremental Static Regeneration)
- Revalidation allows you to keep cached data but refresh it after a specified interval.
- Use `{ cache: 'force-cache', next: { revalidate: seconds } }` with `fetch`, or set `export const revalidate = seconds;` at the page level.
- For example, `revalidate: 60` caches the response and then, after 60 seconds, the next request triggers a fresh fetch and updates the cache.
- This pattern is commonly referred to as Incremental Static Regeneration (ISR).

## 5. Page-level revalidation

At the top of a page component file you can export a constant:

```ts
export const revalidate = 60;
```

This means the **entire page** will be re‑rendered and its cache updated at most once every 60 seconds. The value is in seconds and applies to all `fetch` calls inside that page unless they override it.

## Note:
- Next.js caching is actually composed of three distinct layers that work together:

1️⃣ **Request memoization** – identical calls made within the same render (or flight segment) are deduped, preventing duplicate requests during a single render pass.
2️⃣ **Data cache** – responses from `fetch` (and similar data operations) are stored in a shared cache keyed by URL and request options. This is the layer controlled by the `cache` and `revalidate` options we discussed above.
3️⃣ **Full route cache** – at the highest level, Next.js can cache an entire route’s generated HTML/JSON output, allowing subsequent navigations to the same page to be served from the cache without re‑executing the component tree.


