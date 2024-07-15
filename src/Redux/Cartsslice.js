"use client";
import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
     name : "Cart",
     initialState: [],
     reducers:{
         addproduct(state, action){
             state.push(action.payload)
         },
         removeproduct(state, action){
            return state.filter((item) => item.id !== action.payload);
         }
     }
})
export const{addproduct, removeproduct} = cartSlice.actions
export default cartSlice.reducer;