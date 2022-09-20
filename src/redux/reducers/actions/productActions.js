import { GET_PRODUCT } from "./types";

export const getProduct = (payload) => {
  return {
    type: GET_PRODUCT,
    payload
  }
};