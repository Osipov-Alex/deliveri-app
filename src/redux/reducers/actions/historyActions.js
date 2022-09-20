import { ADD_HISTORY, HISTORY_USER_EMAIL, HISTORY_USER_PHONE_NUMBER } from "./types";

export const historyUserEmail = (payload) => {
  return {
    type: HISTORY_USER_EMAIL,
    payload
  }
};

export const historyUserPhoneNuber = (payload) => {
  return {
    type: HISTORY_USER_PHONE_NUMBER,
    payload
  }
};

export const addHistory = (payload) => {
  return {
    type: ADD_HISTORY,
    payload
  }
};