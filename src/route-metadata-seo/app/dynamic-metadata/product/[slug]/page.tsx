type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;

  return {
    title: slug + " metadata",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product: {slug}</p>
    </div>
  );
}
