import { combineReducers } from "redux";
import CartReducer from "./features/cart/CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

// eslint-disable-next-line no-unused-vars
const rootReducer = combineReducers({
    cart:CartReducer,
    menu:"",
    order:"",
    user:userReducer,
})

console.log(userReducer)
console.log({cart:CartReducer, user:userReducer})
 const store = configureStore({reducer: {cart:CartReducer, user:userReducer}});
 export default store;