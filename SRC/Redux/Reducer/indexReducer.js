import { combineReducers } from "redux";
import GetProductReducer from "./GetProductReducer";
import ProductReducer from "./ProductReducer";
import CartData from './Reducer';

export default indexReducer = combineReducers({
  CartData: CartData,
  ProductData: ProductReducer,
  GetProduct: GetProductReducer,
})
