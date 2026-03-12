import { Suspense } from "react";
import PostList from "./PostList";

export default function SuspenseUI() {
  return (
    <div>
      <h1>Suspense UI</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}
