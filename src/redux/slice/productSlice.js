import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

export const axiosProducts = createAsyncThunk(
  'products/axiosProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/products')
      return response.data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isLoading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [axiosProducts.pending]: (state) => {
      state.isLoading = true
      state.error = ''
    },
    [axiosProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.products = action.payload
    },
    [axiosProducts.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  }
});

export default productSlice.reducer;
export const { getProductsFromDB } = productSlice.actions;