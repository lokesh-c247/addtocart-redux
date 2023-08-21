import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import localQuantityReducer from "../redux/localQuantitySlice";



const store = configureStore({
    reducer : {
        cart : cartSlice,
        localQuantity: localQuantityReducer
    }
})

export default store;