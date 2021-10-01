import { CART_ADD, CART_BUY, CART_REMOVE } from "./actionTypes";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state = initialCart, action) {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;

      return [...state, product];

    case CART_REMOVE:
      const { list } = action;

      return (state = list);

    case CART_BUY:
      return (state = []);

    default:
      return state;
  }
}

export default cartReducer;
