import { cartAdd, cartBuy, cartRemove } from "./actions";

export function cartAddThunk(product) {
  return (dispatch) => {
    const cartList = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.push(product);
    localStorage.setItem("cart", JSON.stringify(cartList));

    dispatch(cartAdd(product));
  };
}

export function cartRemoveThunk(id) {
  return (dispatch, getStore) => {
    const { cart } = getStore();

    const list = cart.filter((elt) => {
      return elt.id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(cartRemove(list));
  };
}

export function cartBuyThunk() {
  return (dispatch) => {
    localStorage.setItem("cart", JSON.stringify([]));

    dispatch(cartBuy());
  };
}
