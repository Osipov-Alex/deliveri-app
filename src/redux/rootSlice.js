import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import historySlice from './slice/historySlice';
import productSlice from './slice/productSlice';
import shopsSlice from './slice/shopsSlice';
import userSlice from './slice/userSlice';

export const rootReducer = combineReducers({
  cart: cartSlice,
  products: productSlice,
  shops: shopsSlice,
  user: userSlice,
  history: historySlice,
});
