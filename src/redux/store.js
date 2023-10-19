import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        userInfo: userSlice.reducer,
        cartItem:cartSlice.reducer
    }
})