import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./store/cartSlice";
import { decreaseStock, increaseStock } from "./store/productSlice";
import { login, logout } from "./store/userSlice";

function Shop() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user = useSelector((state) => state.user.user);

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    dispatch(addToCart(product));
    dispatch(decreaseStock(product.id));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
    dispatch(increaseStock(item.id));
  };

  const handleClearCart = () => {
    cartItems.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        dispatch(increaseStock(item.id));
      }
    });
    dispatch(clearCart());
  };

  const handleLoginLogout = () => {
    if (user.isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login("Sakshi"));
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "30px auto", fontFamily: "Arial" }}>

      <div style={{ marginBottom: 20, padding: 12, border: "1px solid #ccc" }}>
        <h3>User</h3>
        {user.isLoggedIn ? (
          <p>Welcome, <strong>{user.name}</strong></p>
        ) : (
          <p>You are not logged in.</p>
        )}
        <button onClick={handleLoginLogout}>
          {user.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3>Products</h3>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee" }}
          >
            <div>
              <strong>{product.title}</strong>
              <span style={{ marginLeft: 12, color: "#555" }}>₹{product.price}</span>
              <span style={{ marginLeft: 12, color: product.stock === 0 ? "red" : "green" }}>
                Stock: {product.stock}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{ padding: 12, border: "1px solid #ccc" }}>
        <h3>Cart</h3>
        {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #eee" }}
              >
                <div>
                  <strong>{item.title}</strong>
                  <span style={{ marginLeft: 12 }}>₹{item.price}</span>
                  <span style={{ marginLeft: 12 }}>Qty: {item.quantity}</span>
                </div>
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </div>
            ))}
            <div style={{ marginTop: 12, fontWeight: "bold" }}>
              Total Price: ₹{totalPrice}
            </div>
            <button onClick={handleClearCart} style={{ marginTop: 10 }}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Shop;
