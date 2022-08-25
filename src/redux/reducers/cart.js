const defaultState = {
  productsInCart: []
}

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, productsInCart: [...state.productsInCart, action.payload] };
    case 'INCREASE_QUANTITY':
      return {
        ...state, productsInCart: state.productsInCart.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product
          }
        })
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state, productsInCart: state.productsInCart.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product
          }
        })
      };
    default: 
      return state
  }
}

export default cartReducer