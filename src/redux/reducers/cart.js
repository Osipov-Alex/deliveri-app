const defaultState = {
  productsInCart: []
}

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'MAKE_ORDER':
      return { productsInCart: [] }
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
    case "REMOVE_FROM_CART":
      return {
        productsInCart: state.productsInCart.filter(product => product.id !== action.payload)
      };
    default: 
      return state
  }
}

export default cartReducer