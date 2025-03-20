import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const ex = state.items.find((item) => item.id === newItem.id);
      if (ex) {
        ex.qty += 1;
        console.log(ex.qty);
      } else {
        newItem.qty = 1;
        state.items.push(newItem);
      }
      state.totalAmount += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= itemToRemove.price * itemToRemove.qty;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
