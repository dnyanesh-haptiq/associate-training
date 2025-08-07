import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size: 0,
    totalAmount: 0,
    userId: null,
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existProduct = state.items.find((item) => item._id == action.payload._id);

            if(!existProduct) {
                state.items = [...state.items, action.payload];
                state.size++;
                return;
            }

            state.items = state.items.map((item) => {
                return item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item;
            });
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => (item._id !== action.payload._id));
            state.size--;
        },
        getTotalAmount: (state) => {
            let sum = 0;

            state.items.map((item) => {
                sum += (item.price * 1 || item.quantity);
            })

            state.totalAmount = sum;
        }
    }
});

export const {addToCart, removeFromCart, getTotalAmount} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;