export default async function PostList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay
  const posts = await res.json();

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
