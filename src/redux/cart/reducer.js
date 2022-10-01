import { ADD_CART, DELETE_CART } from "../types";

const initialState = {
  cart: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRE:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECRE:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
