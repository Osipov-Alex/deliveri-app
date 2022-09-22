import { ADD_HISTORY, HISTORY_USER_EMAIL, HISTORY_USER_PHONE_NUMBER } from "./actions/types";



const defaultState = {
  orderHistory: [],
  email: '',
  phoneNumber: '',
}

const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HISTORY_USER_EMAIL:
      return { ...state, email: action.payload };
    case HISTORY_USER_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case ADD_HISTORY:
      return { ...state, orderHistory: [...action.payload] };
    default:
      return state
  }
};

export default historyReducer