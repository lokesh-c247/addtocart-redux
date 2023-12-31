import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state , action) => {
            state.items.push(action.payload);
        },
        removeItem : (state , action) => {            
            const itemIdToRemove = action.payload;
            const itemToRemove = state.items.find((item) => item.id === itemIdToRemove)
            state.items = state.items.filter((item)=> item !==  itemToRemove)
        },
        clearCart : (state) => {
            state.items = []
        }
    }
})

export const  {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;