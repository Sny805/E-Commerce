import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import { saveCartToStorage } from "../utills/CartStorage";

const store = configureStore({
    reducer: {
       cart:cartSlice
    }
})

export default store;

store.subscribe(() => {
  const state = store.getState();
  saveCartToStorage(state.cart.cartItems);
});