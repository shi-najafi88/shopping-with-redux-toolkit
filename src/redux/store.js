import { configureStore } from "@reduxjs/toolkit";
import ShoppingSlice from "./ShoppingSlice";

export const store = configureStore({
  reducer: {
    order: ShoppingSlice,
  },
});
