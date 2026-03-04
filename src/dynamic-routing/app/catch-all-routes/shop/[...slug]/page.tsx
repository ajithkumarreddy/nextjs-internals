type ShopPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Catch All Segments</h1>
      {slug.map((segment, index) => {
        return <p>{segment}</p>;
      })}
    </div>
  );
}
