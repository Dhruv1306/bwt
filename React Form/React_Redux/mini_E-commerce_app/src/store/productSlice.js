import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, title: "Handmade Vase", price: 800, stock: 5 },
    { id: 2, title: "Wooden Craft", price: 1200, stock: 3 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    decreaseStock: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.stock > 0) {
        product.stock -= 1;
      }
    },
    increaseStock: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.stock += 1;
      }
    },
  },
});

export const { decreaseStock, increaseStock } = productSlice.actions;
export default productSlice.reducer;
