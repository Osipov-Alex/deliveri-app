const defaultState = {
  orderHistory: [],
  email: '',
  phoneNumber: '',
}

const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HISTORY_USER_EMAIL':
      return { ...state, email: action.payload };
    case 'HISTORY_USER_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'ADD_HISTORY_FROM_DB':
      return { ...state, orderHistory: [...action.payload] };
    default:
      return state
  }
}

export default historyReducer;