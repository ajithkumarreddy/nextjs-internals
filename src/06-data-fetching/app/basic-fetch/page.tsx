// fetch
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Error handling
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

// Async server component
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
