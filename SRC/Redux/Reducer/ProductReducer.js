import { SET_PRODUCT_LIST } from '../Actions/Constant'


export default ProductData = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // console.log("Action: ", action);
      return [...action.payload]
    default:
      return state;
  }
}
