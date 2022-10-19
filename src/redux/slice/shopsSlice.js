import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';

export const axiosShops = createAsyncThunk(
  'shop/axiosShops',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/shops')
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const shopsSlice = createSlice({
  name: 'shop',
  initialState: {
    shops: [],
    currentShop: '',
    isLoading: false,
    error: ''
  },
  reducers: {
    currentShop(state, action) {
      state.currentShop = action.payload
    },
  },
  extraReducers: {
    [axiosShops.pending]: (state) => {
      state.isLoading = true
      state.error = ''
    },
    [axiosShops.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = ''
      state.shops = action.payload
    },
    [axiosShops.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  }
});

export default shopsSlice.reducer
export const { addShops, currentShop } = shopsSlice.actions;
