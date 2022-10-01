import { INCRE, DECRE } from "../types";

export const Increment = (payload) => {
  return {
    type: INCRE,
    payload: payload,
  };
};

export const Decrement = (payload) => {
  return {
    type: DECRE,
    payload: payload,
  };
};
