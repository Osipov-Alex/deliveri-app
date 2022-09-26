import { createSlice } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
  name: 'shop',
  initialState: {
    shops: [],
    currentShop: '',
  },
  reducers: {
    addShops(state, action) {
      state.shops = [...action.payload]
    },
    currentShop(state, action) {
      state.currentShop = action.payload
    },
  }
});

export default shopsSlice.reducer
export const { addShops, currentShop } = shopsSlice.actions;