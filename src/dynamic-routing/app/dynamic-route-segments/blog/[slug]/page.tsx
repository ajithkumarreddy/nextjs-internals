type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
