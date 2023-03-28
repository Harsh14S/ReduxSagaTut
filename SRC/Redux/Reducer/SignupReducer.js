import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      // console.log("Signup Reducer: ", action.payload);
      return { SignupSuccess: true, data: action.payload }
    case SIGNUP_FAILED:
      return { SignupSuccess: false, error: e }
    default:
      return state;
  }
}
