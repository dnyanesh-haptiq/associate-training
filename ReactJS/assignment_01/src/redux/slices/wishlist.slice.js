import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size: 0,
    userId: null,
    items: []
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existProduct = state.items.find((item) => item._id === action.payload._id);

            if(!existProduct) {
                state.items = [...state.items, action.payload];
                state.size++;
                return;
            }
        },

        removeFromWishlist: (state, action) => {
            state.items = state.items.filter((item) => (item._id !== action.payload._id));
            state.size--;
        },
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;