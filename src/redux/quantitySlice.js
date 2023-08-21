import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const allData = createAsyncThunk("quantitySlice/fetchProducts" , async() => {
    const response = (await fetch("https://fakestoreapi.com/products"))
    const data = await response.json();
    return data;
});



const quantitySlice = createSlice({
    name : "quanity",
    initialState : {
        allProducts : []
    },
    reducers : {
        increaseQuantity : (state , action) => {
            state.allProducts.find((item) => item.id === action.payload).quantity +=1
        },
        
        decreaseQuantity : (state , action) => {
            state.allProducts.find((item) => item.id === action.payload).quantity -=1
        }
    },
    extraReducers : (builder) => {
        builder.addCase(allData.fulfilled , (state , action) => {
            state.allProducts = action.payload.map(product => ({...product , quantity:1}));
        })
    }
})

export const {increaseQuantity , decreaseQuantity} = quantitySlice.actions;
export default quantitySlice.reducer;