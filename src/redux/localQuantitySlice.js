import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("products/fetchProduct", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data   ,"data");
    return data;
});

const localQuantitySlice = createSlice({
    name: "localQuantity",
    initialState: {
        allProducts : [],
        products : [],
        quantity:[]
    },
    reducers: {
        setLocalQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            state.allProducts[productId] = quantity;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { setLocalQuantity } = localQuantitySlice.actions;
export default localQuantitySlice.reducer;
