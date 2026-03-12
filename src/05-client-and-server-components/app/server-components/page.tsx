export default function Page() {
  const message = "This is rendered on the server";

  return (
    <div>
      <h1>Server Component</h1>
      <p>{message}</p>
    </div>
  );
}
