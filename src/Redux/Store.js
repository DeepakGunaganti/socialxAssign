import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartsslice"
const store = configureStore({
     reducer:{
        cart: cartReducer
     }
})
export default store;
