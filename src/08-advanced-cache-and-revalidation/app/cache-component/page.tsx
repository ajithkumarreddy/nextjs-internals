import { unstable_cache } from "next/cache";

const getPosts = unstable_cache(
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  },
  ["posts-cache"],
  { revalidate: 60 },
);

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
