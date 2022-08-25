const defaultState = {
  shops: [
    { name: 'ATB', id: 1 },
    { name: 'SILPO', id: 2 },
    { name: 'NOVUS', id: 3 },
    { name: 'VARUS', id: 4 },
  ],
  currentShop: ''
}

const shopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CURRENT_SHOP':
      return { ...state, currentShop: action.payload}
    default:
      return state
  }
}

export default shopReducer