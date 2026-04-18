import Order from "./components/Order";

function App() {
  const order1 = new Order("Riya", "101", 500);
  const order2 = new Order("Amit", "102", 350);
  const order3 = new Order("Priya", "103", 700);

  // operations
  order1.addAmount(100); 
  order2.addAmount(50, "Extra sauce"); 
  order3.addAmount(200); 
  order1.applyDiscount(10); // 10% discount
  order2.markAsDelivered();

  // Collect all orders
  const orders = [order1, order2, order3];

  // order with highest amount
  const highestOrder = orders.reduce((max, curr) =>
    curr.getAmount() > max.getAmount() ? curr : max,
  );

  // Count delivered orders
  const deliveredCount = orders.filter((o) => o.getDeliveryStatus()).length;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Online Food Order System</h1>
      <h2>All Orders</h2>
      <ol>
        {orders.map((order, idx) => (
          <li key={order.getOrderId()} style={{ marginBottom: "0.5rem" }}>
            <code>{order.toString()}</code>
          </li>
        ))}
      </ol>
      <h3>Order with Highest Amount</h3>
      <p><code>{highestOrder.toString()}</code></p>
      <h3>Delivered Orders Count</h3>
      <p>{deliveredCount}</p>
    </div>
  );
}

export default App;
