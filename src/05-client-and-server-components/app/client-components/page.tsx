"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Client Component</h1>
      <button
        style={{
          background: "white",
          color: "black",
          border: "1px solid #ccc",
          padding: "4px 6px",
          cursor: "pointer",
        }}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Likes {count}
      </button>
    </div>
  );
}
