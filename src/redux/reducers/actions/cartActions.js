import { ADD_PRODUCT, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./types";

export const clearCart = (payload) => {
  return {
    type: CLEAR_CART,
    payload
  }
};

export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload
  }
};

export const increaseQuantity = payload => {
  return {
    type: INCREASE_QUANTITY,
    payload
  }
};

export const decreaseQuantity = payload => {
  return {
    type: DECREASE_QUANTITY,
    payload
  }
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    payload
  }
};