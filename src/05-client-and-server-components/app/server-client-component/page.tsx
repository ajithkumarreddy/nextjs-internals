import Counter from "./counter"

export default function Page() {
  const posts = ["Post 1", "Post 2", "Post 3"]

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(post => (
        <p key={post}>{post}</p>
      ))}

      <Counter />
    </div>
  )
}