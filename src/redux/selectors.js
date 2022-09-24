import { createSelector } from 'reselect'

const getShopsReducer = (state) => state.shop;
const getProductsReducer = (state) => state.product;
const getCartReducer = (state) => state.cart;
const getUserReducer = (state) => state.user;
const getHistoryReducer = (state) => state.history;

export const getShops = createSelector(
  [getShopsReducer], state => state.shops
);

export const getCurrentShop = createSelector(
  [getShopsReducer], state => state.currentShop
);

export const getProducts = createSelector(
  [getProductsReducer, getCurrentShop],
  (state, shop) => state.products.filter(product => {
    return product.shop === shop
  })
);

export const getProductInCart = createSelector(
  [getCartReducer], state => state.productsInCart
);

export const getUserName = createSelector(
  [getUserReducer], state => state.name
);

export const getUserEmail = createSelector(
  [getUserReducer], state => state.email
);

export const getUserPhoneNumber = createSelector(
  [getUserReducer], state => state.phoneNumber
);

export const getUserAddress = createSelector(
  [getUserReducer], state => state.address
);

export const getUserEmailHistory = createSelector(
  [getHistoryReducer], state => state.email
);

export const getUserPhoneNuberlHistory = createSelector(
  [getHistoryReducer], state => state.phoneNumber
);

export const getOrderHistory = createSelector(
  [getHistoryReducer, getUserEmailHistory, getUserPhoneNuberlHistory],
  (state, email, phoneNumber) => state.orderHistory.filter(order => {
    return order.phoneNumber === phoneNumber && order.email === email
  })
);
