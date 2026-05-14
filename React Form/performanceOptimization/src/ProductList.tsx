import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const PAGE_SIZE = 5;

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setProducts((prev) => [...prev, ...data.products]);
        if (skip + PAGE_SIZE >= data.total) {
          setHasMore(false);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log("Request Cancelled");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [skip]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + PAGE_SIZE);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
      {loading && <p>Loading...</p>}
      {!loading && hasMore && (
        <button onClick={handleLoadMore} style={{ padding: "8px 16px", marginTop: 10 }}>
          Load More
        </button>
      )}
      {!hasMore && <p style={{ color: "#888" }}>No more products.</p>}
    </div>
  );
}

export default ProductList;
