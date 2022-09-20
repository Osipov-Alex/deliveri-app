import { GET_PRODUCT } from "./actions/types";

const defaultState = {
  products: [],
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, products: action.payload }
    default:
      return state
  }
};

export default productReducer