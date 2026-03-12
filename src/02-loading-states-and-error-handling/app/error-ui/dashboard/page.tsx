async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  // simulate error
  if (data.length > 0) {
    throw new Error("No posts found...");
  }

  return data;
}

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
