import { CLEAR_USER_INFORMATION, USER_ADDRESS, USER_EMAIL, USER_NAME, USER_PHONE_NUMBER } from "./types";

export const userName = (payload) => {
  return {
    type: USER_NAME,
    payload
  }
};

export const userEmail = (payload) => {
  return {
    type: USER_EMAIL,
    payload
  }
};

export const userPhoneNumber = (payload) => {
  return {
    type: USER_PHONE_NUMBER,
    payload
  }
};

export const userAddress = (payload) => {
  return {
    type: USER_ADDRESS,
    payload
  }
};

export const clearUserInformation = (payload) => {
  return {
    type: CLEAR_USER_INFORMATION,
    payload
  }
};