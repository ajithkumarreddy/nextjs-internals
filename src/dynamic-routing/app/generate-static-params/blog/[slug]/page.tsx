type BlogPageProps = {
  params: {
    slug: string;
  };
};

// Pre-render these routes at build time
export async function generateStaticProps() {
  return [{ slug: "post-1" }, { slug: "post-2" }, { slug: "post-3" }];
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
