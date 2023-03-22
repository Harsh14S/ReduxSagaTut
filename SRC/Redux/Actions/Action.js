import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./Constant";

export const addToCart = (data) => {
  // console.log("ADD_TO_CART action called....");
  return {
    type: ADD_TO_CART,
    payload: data,
  }
}
export const removeFromCart = (data) => {
  // console.log("REMOVE_TO_CART action called....");
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  }
}
export const emptyCart = () => {
  // console.log("REMOVE_TO_CART action called....");
  return {
    type: EMPTY_CART,
  }
}
