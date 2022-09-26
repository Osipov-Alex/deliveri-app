import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
  },
  reducers: {
    clearCart(state) {
      state.productsInCart = []
    },
    addProduct(state, action) {
      state.productsInCart.push(action.payload);
    },
    increaseQuantity(state, action) {
      state.productsInCart = state.productsInCart.map(product => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product
        }
      })
    },
    decreaseQuantity(state, action) {
      state.productsInCart = state.productsInCart.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product
          }
        })
    },
    removeFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
    },
  }
});

export default cartSlice.reducer
export const { addProduct, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;