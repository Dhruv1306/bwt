interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

function getInStockProducts(products: Product[]): Product[] {
  return products.filter((product) => product.inStock);
}

export function ProductsList({ products }: { products: Product[] }) {
  const inStockProducts = getInStockProducts(products);

  return (
    <div>
      <h1>Products</h1>
      {inStockProducts.map((p) => (
        <div>
          <p>Name: {p.name} ({p.id})</p>
          <p>Price: ${p.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
