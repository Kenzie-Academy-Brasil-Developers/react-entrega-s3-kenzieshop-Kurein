import { CART_ADD, CART_BUY, CART_REMOVE } from "./actionTypes";

export const cartAdd = (product) => ({ type: CART_ADD, product });

export const cartRemove = (list) => ({ type: CART_REMOVE, list });

export const cartBuy = () => ({ type: CART_BUY });
