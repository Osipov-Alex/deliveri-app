const defaultState = {
  products: [],
};


const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_FROM_DB':
      return { ...state, products: action.payload }
    default:
      return state
  }
};

export default productReducer
