import { createSelector } from '@reduxjs/toolkit';

const getShopsSlice = (state) => state.shops;
const getProductsSlice = (state) => state.products;
const getCartSlice = (state) => state.cart;
const getUserSlice = (state) => state.user;
const getHistorySlice = (state) => state.history;

export const getShops = createSelector(
  [getShopsSlice], state => state.shops
);

export const getCurrentShop = createSelector(
  [getShopsSlice], state => state.currentShop
);

export const getProducts = createSelector(
  [getProductsSlice, getCurrentShop],
  (state, shop) => state.products.filter(product => {
    return product.shop === shop
  })
);

export const getProductInCart = createSelector(
  [getCartSlice], state => state.productsInCart
);

export const getUserName = createSelector(
  [getUserSlice], state => state.name
);

export const getUserEmail = createSelector(
  [getUserSlice], state => state.email
);

export const getUserPhoneNumber = createSelector(
  [getUserSlice], state => state.phoneNumber
);

export const getUserAddress = createSelector(
  [getUserSlice], state => state.address
);

export const getUserEmailHistory = createSelector(
  [getHistorySlice], state => state.email
);

export const getUserPhoneNumberlHistory = createSelector(
  [getHistorySlice], state => state.phoneNumber
);

export const getOrderHistory = createSelector(
  [getHistorySlice, getUserEmailHistory, getUserPhoneNumberlHistory],
  (state, email, phoneNumber) => state.orderHistory.filter(order => {
    return order.phoneNumber === phoneNumber && order.email === email
  })
);
