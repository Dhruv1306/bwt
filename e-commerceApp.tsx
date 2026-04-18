import React, { useState } from "react";
import { Inventory } from "./components/Inventory";
import {
  BaseProduct,
  ElectronicsProduct,
  ClothingProduct,
} from "./components/Product";
import { CreditCardPayment, PayPalPayment } from "./components/Payment";
import { Order } from "./components/Order";

const inventory = new Inventory<BaseProduct<any>>();

// Add some products
const laptop = new ElectronicsProduct("1", "Laptop", 1000, "Electronics");
const tshirt = new ClothingProduct("2", "T-Shirt", 50, "Clothing");
inventory.addItem(laptop);
inventory.addItem(tshirt);

function App() {
  const [order] = useState(new Order());
  const [message, setMessage] = useState("");

  const handleAddToOrder = (product: BaseProduct<any>) => {
    order.addProduct(product, 1);
    setMessage("Product added to order!");
  };

  const handleCheckout = async (method: "credit" | "paypal") => {
    let payment;
    if (method === "credit") {
      payment = new CreditCardPayment("1234567812345678", "123");
    } else {
      payment = new PayPalPayment("user@example.com");
    }
    order.setPaymentMethod(payment);
    const result = await order.checkout();
    setMessage(
      result.success
        ? `Order placed! Transaction ID: ${result.transactionId}`
        : "Payment failed!",
    );
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>E-Commerce System</h1>
      <h2>Products</h2>
      <ul>
        {inventory.getAllItems().map((product) => (
          <li key={product.id}>
            {product.name} - ${product.basePrice} ({product.category})
            <button
              onClick={() => handleAddToOrder(product)}
              style={{ marginLeft: 8 }}
            >
              Add to Order
            </button>
          </li>
        ))}
      </ul>
      <h2>Order</h2>
      <button onClick={() => handleCheckout("credit")}>
        Checkout with Credit Card
      </button>
      <button
        onClick={() => handleCheckout("paypal")}
        style={{ marginLeft: 8 }}
      >
        Checkout with PayPal
      </button>
      <div style={{ marginTop: 16 }}>{message}</div>
    </div>
  );
}

export default App;
