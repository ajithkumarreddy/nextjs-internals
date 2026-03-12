import { Suspense } from "react";
import PostList from "../components/PostList";

const BlogPage = () => {
  return (
    <Suspense fallback={<p>Loading blog posts...</p>}>
      <PostList />
    </Suspense>
  );
};

export default BlogPage;
