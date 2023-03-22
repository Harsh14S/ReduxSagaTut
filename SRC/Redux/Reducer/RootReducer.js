import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartData from './Reducer';

export default RootReducer = combineReducers({
  CartData: CartData,
  ProductData: ProductReducer,
})
