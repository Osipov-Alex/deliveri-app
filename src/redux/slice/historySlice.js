import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios.js';


export const axiosHistory = createAsyncThunk(
  'history/axiosHistory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/orders')
      return response.data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

const historySlice = createSlice({
  name: 'history',
  initialState: {
    orderHistory: [],
    email: '',
    phoneNumber: '',
    isLoading: false,
    error: ''
  },
  reducers: {
    historyUserEmail(state, action) {
      state.email = action.payload
    },
    historyUserPhoneNumber(state, action) {
      state.phoneNumber = action.payload
    },
  },
  extraReducers: {
    [axiosHistory.pending]: (state, action) => {
      state.isLoading = true
      state.error = ''
    },
    [axiosHistory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.orderHistory = action.payload
    },
    [axiosHistory.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },

  }
});

export default historySlice.reducer
export const { historyUserEmail, historyUserPhoneNumber, addHistory } = historySlice.actions