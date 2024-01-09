/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
// const CartState = state.cart.map((i)=>{
//     if(i.pizzaId==action.payload){
//         return {...i, quantity:i.quantity++,totalPrice:(i.quantity+1)*i.unitPrice}
//     }
//     return {...i}
//  })
//  console.log(CartState)
// state.cart = CartState
const initialState={
   cart:[]
}
const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItem(state,action){
            const item = state.cart.find((item) => item.pizzaId === action.payload.pizzaId);
            if(item){
                item.quantity++;
            }  else{
                state.cart = [...state.cart,action.payload];
            }
            
        },
        deleteItem(state,action){
            
           state.cart = state.cart.filter((i)=>i.pizzaId!==action.payload)
        },
        increaseItemQuantity(state,action){
            const item = state.cart.find((item) => item.pizzaId === action.payload);

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        ClearCart(state,action){
            
            state.cart = []
         },
        decreaseItemQuantity(state,action){
            const item = state.cart.find((item) => item.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
      
            if (item.quantity === 0) CartSlice.caseReducers.deleteItem(state, action);
           }
    }
})

export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const  {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,ClearCart} = CartSlice.actions;
export default CartSlice.reducer;