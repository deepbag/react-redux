import { ADD_CART, DELETE_CART } from "../types";

export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload: payload,
  };
};

export const deleteCart = (payload) => {
  return {
    type: DELETE_CART,
    payload: payload,
  };
};
