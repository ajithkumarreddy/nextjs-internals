// Everything inside the page refreshes together.
export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return <div>Number of posts: {data.length}</div>;
}
