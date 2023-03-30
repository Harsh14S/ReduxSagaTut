import { combineReducers } from "redux";
import GetProductReducer from "./GetProductReducer";
import GetSearchProductReducer from "./GetSearchProductReducer";
import GetUserDataReducer from "./GetUserDataReducer";
import GetUserProfileReducer from "./GetUserProfileReducer";
import LoginReducer from "./LoginReducer";
import ProductReducer from "./ProductReducer";
import CartData from './Reducer';
import SignupReducer from "./SignupReducer";

export default indexReducer = combineReducers({
  CartData: CartData,
  ProductData: ProductReducer,
  GetProduct: GetProductReducer,
  GetSearchProduct: GetSearchProductReducer,
  SignUp: SignupReducer,
  LogIn: LoginReducer,
  GetUserData: GetUserDataReducer,
  GetUserProfile: GetUserProfileReducer,
})
