type ProductPageProps = {
  params: {
    id: number;
  };
};

// Sample data
const products = [
  { id: 1, name: "laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Tablet" },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {product.id}</p>
    </div>
  );
}
