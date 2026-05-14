import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ id: product.id, title: product.title, price: product.price, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existing = state.cartItems.find((item) => item.id === productId);
      if (existing) {
        state.totalPrice -= existing.price;
        existing.quantity -= 1;
        if (existing.quantity === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== productId);
        }
      }
    },
    deleteItem: (state, action) => {
      const productId = action.payload;
      const existing = state.cartItems.find((item) => item.id === productId);
      if (existing) {
        state.totalPrice -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
