import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../feature/cartSlice";
import productReducer from "./../feature/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
