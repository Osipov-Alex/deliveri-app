const defaultState = {
  name: '',
  email: '',
  phoneNumber: '',
  adress: ''
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export default userReducer