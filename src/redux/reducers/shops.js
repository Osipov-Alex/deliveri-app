const defaultState = {
  shops: [
  ],
  currentShop: ''
}

const shopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SHOPS_FROM_DB':
      return { ...state, shops: action.payload }
    case 'CURRENT_SHOP':
      return { ...state, currentShop: action.payload}
    default:
      return state
  }
}

export default shopReducer