type DocumentsPageProps = {
  params: {
    category: string;
    topic: string;
  };
};

export default async function DocumentsPage({ params }: DocumentsPageProps) {
  const { category, topic } = await params;
  
  return (
    <div>
      <h1>Documentation Page</h1>
      <p>Category: {category}</p>
      <p>Topic: {topic}</p>
    </div>
  );
}
