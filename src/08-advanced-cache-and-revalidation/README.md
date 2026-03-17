### Advanced cache and revalidation

# 1. Cache component
- A Cached Component is a Server Component whose output is stored in cache so that Next.js doesn't re-render it on every request.
- A component is cached using unstable_cache
- "Why not just use fetch caching?" - Because sometimes data is not fetched via fetch.

Example:
1. database queries
2. Prisma queries
3. heavy calculations

# 2. cacheTag
# 3. updateTag
# 4. revalidateTag