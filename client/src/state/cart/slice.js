import {createSlice} from '@reduxjs/toolkit'
import { initialState } from './initialState';
import { cartReducer } from './reducer';


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:cartReducer
})

export const {
    setItems,
    addToCart,
    decreaseCount,
    increaseCount,
    setIsCartOpen,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;