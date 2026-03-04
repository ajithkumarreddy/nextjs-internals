"use client";

import { useParams } from "next/navigation";

export default function DocumentsPage() {
  const { slug } = useParams();

  return (
    <>
      <h1>Documents Page</h1>
      <p>Doc: {slug}</p>
    </>
  );
}
