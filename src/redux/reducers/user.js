const defaultState = {
  name: '',
  email: '',
  phoneNumber: '',
  address: ''
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload }
    case 'EMAIL':
      return { ...state, email: action.payload }
    case 'PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload }
    case 'ADDRESS':
      return { ...state, address: action.payload }
    case 'SUBMIT':
      return { name: '', email: '', phoneNumber: '', address: '' }
    default:
      return state
  }
}

export default userReducer