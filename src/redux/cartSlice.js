import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = new createSlice({
    name: 'cart',
    initialState: {
        cartItem: [],
    },
    reducers: {
        addItem(state, action) {
          
            state.cartItem.push(action.payload)
        },
        removeItem(state, action) {

            console.log(action.payload)
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        }
    }
})


export const { addItem, removeItem } = cartSlice.actions

export default cartSlice