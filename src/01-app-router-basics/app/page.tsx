import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>App router basics</h1>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </main>
  );
}
