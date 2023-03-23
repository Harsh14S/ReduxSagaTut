import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../Actions/Constant'

export default CartData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.includes(action.payload)) {
        console.log("Already added to cart");
        return [...state];
      } else {
        console.log("Added to cart");
        return [...state, action.payload];
      }

    case REMOVE_FROM_CART:
      console.log("Removed from cart");
      // state.length >= 1 ? state.length = state.length - 1 : [];
      const remainingItem = state.filter((item) => item.id !== action.payload);
      // console.log("Remaining Item: ", remainingItem);

      return [...remainingItem];

    case EMPTY_CART:
      state = [];
      console.log("Cart is Emptied");
      return [...state];

    default:
      return state;
  }
}
