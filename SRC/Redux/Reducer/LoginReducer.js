import { LOGIN_FAILED, LOGIN_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("Login Reducer: ", action.payload);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { LoginSuccess: true, data: action.payload }

    case LOGIN_FAILED:
      return { LoginSuccess: false, data: action.payload }
    default:
      return state;
  }
}
