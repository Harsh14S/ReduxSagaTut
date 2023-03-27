import { combineReducers } from "redux";
import GetProductReducer from "./GetProductReducer";
import LoginReducer from "./LoginReducer";
import ProductReducer from "./ProductReducer";
import CartData from './Reducer';
import SignupReducer from "./SignupReducer";

export default indexReducer = combineReducers({
  CartData: CartData,
  ProductData: ProductReducer,
  GetProduct: GetProductReducer,
  SignUp: SignupReducer,
  LogIn: LoginReducer,
})
