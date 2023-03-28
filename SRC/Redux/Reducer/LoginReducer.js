import { LOGIN_FAILED, LOGIN_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log("Login Reducer: ", action.payload);
      return { LoginSuccess: true, data: action.payload }
    case LOGIN_FAILED:
      return { LoginSuccess: false, data: e }
    default:
      return state;
  }
}
