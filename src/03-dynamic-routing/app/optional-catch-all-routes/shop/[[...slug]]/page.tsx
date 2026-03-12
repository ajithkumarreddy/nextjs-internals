type ShopPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;

  if (!slug) {
    return <h1>Shopping page</h1>;
  }

  return (
    <div>
      <h1>Optional Catch All Segments</h1>
      <ul>
        {slug.map((segment, index) => {
          return <p key={index}>{segment}</p>;
        })}
      </ul>
    </div>
  );
}
