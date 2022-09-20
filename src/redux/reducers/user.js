import { CLEAR_USER_INFORMATION, USER_ADDRESS, USER_EMAIL, USER_NAME, USER_PHONE_NUMBER } from "./actions/types"


const defaultState = {
  name: '',
  email: '',
  phoneNumber: '',
  address: ''
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_NAME:
      return { ...state, name: action.payload }
    case USER_EMAIL:
      return { ...state, email: action.payload }
    case USER_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload }
    case USER_ADDRESS:
      return { ...state, address: action.payload }
    case CLEAR_USER_INFORMATION:
      return { name: '', email: '', phoneNumber: '', address: '' }
    default:
      return state
  }
};

export default userReducer
