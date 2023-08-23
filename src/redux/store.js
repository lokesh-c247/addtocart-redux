  import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import quantitySlice from "./quantitySlice";

const store = configureStore({
    reducer : {
        cart : cartSlice, // name : variable name for slice 
        quantity : quantitySlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {}
    })  
})

export default store;