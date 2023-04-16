import { combineReducers,} from "@reduxjs/toolkit";
import { cartSlice } from "./cart";

export const reducer = combineReducers({
   cart :cartSlice.reducer
  });