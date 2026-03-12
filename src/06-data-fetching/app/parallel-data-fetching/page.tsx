async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function Page() {
  // Parallel data fetching using Promise.all
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

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
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
