interface ProductCardProps {
  title: string;
  price: number;
  thumbnail: string;
}

function ProductCard({ title, price, thumbnail }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 6, padding: 10, marginBottom: 10, display: "flex", gap: 12, alignItems: "center" }}>
      <img src={thumbnail} alt={title} width={60} height={60} style={{ objectFit: "cover", borderRadius: 4 }} />
      <div>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ color: "#555" }}>${price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
