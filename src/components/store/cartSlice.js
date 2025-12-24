import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromStorage } from "../utills/CartStorage";



const carSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: loadCartFromStorage(),
    },
    reducers: {
        addItems: (state, action) => {
            const item = action.payload
            const existingItem = state.cartItems.find((i) => i.id == item.id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({ ...item, quantity: 1 })

            }
        },
        increaseQty: (state, action) => {
            const item = state.cartItems.find((i) => i.id == action.payload)
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQty: (state, action) => {
            const item = state.cartItems.find((i) => i.id == action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.cartItems = []
        },

    }
})

export const { addItems, removeItem, clearCart,increaseQty,decreaseQty } = carSlice.actions

export default carSlice.reducer