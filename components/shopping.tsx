import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductItemProps = {
  product: Product;
  onDelete: (id: number) => void;
  onAddToCart: (product: Product) => void;
};

const ProductItem = ({ product, onDelete, onAddToCart }: ProductItemProps) => {
  const handleView = () => {
    alert(`Product: ${product.name}`);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      <strong>{product.name}</strong> - ${product.price}
      <div style={{ marginTop: "6px" }}>
        <button onClick={handleView}>View</button>{" "}
        <button onClick={() => onDelete(product.id)}>Delete</button>{" "}
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </li>
  );
};

export function shopping() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Phone", price: 699 },
    { id: 2, name: "Laptop", price: 1299 },
    { id: 3, name: "Headphones", price: 199 },
  ]);

  const [cart, setCart] = useState<Product[]>([]);

  const handleDeleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onDelete={handleDeleteProduct}
              onAddToCart={handleAddToCart}
            />
          ))}
        </ul>
      )}

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
