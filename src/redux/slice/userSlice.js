import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  reducers: {
    userName(state, action) {
      return {...state, name: action.payload}
    },
    userEmail(state, action) {
      return {...state, email: action.payload}
    },
    userPhoneNumber(state, action) {
      return {...state, phoneNumber: action.payload}
    },
    userAddress(state, action) {
      return {...state, address: action.payload}
    },
    clearUserInformation(state) {
      return { name: '', email: '', phoneNumber: '', address: '' }
    },
  }
});

export default userSlice.reducer
export const { userAddress, userName, userPhoneNumber, userEmail, clearUserInformation } = userSlice.actions