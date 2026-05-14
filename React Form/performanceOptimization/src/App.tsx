import { lazy, Suspense, useState } from "react";

const ProductList = lazy(() => import("./ProductList"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", fontFamily: "Arial" }}>
      <h1>Performance Optimization Demo</h1>

      <button
        onClick={() => setShow(true)}
        style={{ padding: "8px 16px", marginBottom: 20 }}
      >
        Show Products
      </button>

      {show && (
        <Suspense fallback={<p>Loading Products...</p>}>
          <ProductList />
        </Suspense>
      )}
    </div>
  );
}

export default App;
