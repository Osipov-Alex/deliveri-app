import { ADD_SHOPS, CURRENT_SHOP } from "./types";

export const addShops = (payload) => {
  return {
    type: ADD_SHOPS,
    payload
  }
};

export const currentShop = (payload) => {
  return {
    type: CURRENT_SHOP,
    payload
  }
};