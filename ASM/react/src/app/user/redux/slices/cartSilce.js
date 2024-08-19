import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, actions) => {
      alert('them thanh cong')
      const { product, setQuantity, setsize } = actions.payload;
      const cart = state;
      const index = cart.findIndex(
        (item) => item._id == product._id && item.setsize == setsize
      );
      if (index == -1) {
        cart.push({ ...product, setQuantity, setsize });
      } else {
        // đã có -> tăng số lượng
        cart[index].setQuantity = Number(cart[index].setQuantity) + Number(setQuantity);
      }
      state = cart;
      return state;
    },
    removeItem: (state, actions) => {
      const { product, setsize } = actions.payload;
      const cart = state;
      const index = cart.findIndex(
        (item) => item._id == product._id && item.setsize == setsize
      );
      cart.splice(index, 1);
      return cart;
    },
    removeCart: (state) => (state = []),
    updateSetQuantity: (state, action) => {
      const { product, setQuantity, setsize } = action.payload;
      const index = state.findIndex(
        (item) => item._id === product._id && item.setsize === setsize
      );
    
      if (index !== -1) {
        state[index].setQuantity = Math.max(1, setQuantity);
      }
    },
  },
});

export const { addItem, removeItem, removeCart, updateSetQuantity } =cartSlice.actions;
export default cartSlice.reducer;