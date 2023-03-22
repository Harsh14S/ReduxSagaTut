import { PRODUCT_LIST } from '../Actions/Constant'


export default ProductData = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("Action: ", action);
      return [action.state]
    default:
      return state;
  }
}
