import { ADD_SHOPS, CURRENT_SHOP } from "./actions/types"


const defaultState = {
  shops: [],
  currentShop: ''
}

const shopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHOPS:
      return { ...state, shops: action.payload }
    case CURRENT_SHOP:
      return { ...state, currentShop: action.payload }
    default:
      return state
  }
};

export default shopReducer

