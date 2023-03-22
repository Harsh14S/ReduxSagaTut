import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../Actions/Constant'

export default CartData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Added to cart");
      return [action.payload, ...state];

    case REMOVE_FROM_CART:
      console.log("Removed from cart");
      state.length >= 1 ? state.length = state.length - 1 : [];
      return [...state];

    case EMPTY_CART:
      state = [];
      console.log("Cart is Emptied");
      return [...state];

    default:
      return state;
  }
}
