import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const ShoppingSlice = createSlice({
  name: "shopping/redux",
  initialState,
  reducers: {
    ADD: (state, action) => {
      let findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const newObj = { ...action.payload, quantity: 1 };
      if (findIndex >= 0) {
        state.cartItems[findIndex] = {
          ...state.cartItems[findIndex],
          quantity: state.cartItems[findIndex].quantity + 1,
        };
      } else {
        state.cartItems.push(newObj);
      }

      state.cartTotalQuantity += 1;
      state.cartTotalPrice += Math.floor(Number(action.payload.price));
    },

    CLEAR: (state, action) => {
      state.cartItems = action.payload;
      state.cartTotalPrice = 0;
      state.cartTotalQuantity = 0;
    },

    DELET: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { ADD, CLEAR, DELET } = ShoppingSlice.actions;
export default ShoppingSlice.reducer;
