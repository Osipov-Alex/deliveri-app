import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getProductsFromDB(state, action) {
      state.products = [...action.payload]
    }
  },
});

export default productSlice.reducer;
export const { getProductsFromDB } = productSlice.actions;