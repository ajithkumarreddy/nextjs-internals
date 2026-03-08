async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  await new Promise((res) => setTimeout(res, 2000));
  return res.json();
}

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      {posts.slice(0, 5).map((post: any) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default PostList;
