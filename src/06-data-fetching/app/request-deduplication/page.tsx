async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Page() {
  // Parallel data fetching using Promise.all
  // Request deduplication: Next.js will recognize that both calls to getPosts() are the same and will only make one network request, returning the same data for both variables.
  const [posts, postsList] = await Promise.all([getPosts(), getPosts()]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Users</h1>
        <ul>
          {postsList.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
