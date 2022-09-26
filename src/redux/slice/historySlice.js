import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: 'history',
  initialState: {
    orderHistory: [],
    email: '',
    phoneNumber: '',
  },
  reducers: {
    historyUserEmail(state, action) {
      state.email = action.payload
    },
    historyUserPhoneNumber(state, action) {
      state.phoneNumber = action.payload
    },
    addHistory(state, action) {
      state.orderHistory = [...action.payload]
    },
  }
});

export default historySlice.reducer
export const { historyUserEmail, historyUserPhoneNumber, addHistory } = historySlice.actions