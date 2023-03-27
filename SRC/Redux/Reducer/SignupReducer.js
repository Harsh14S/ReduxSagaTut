import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("Signup Reducer: ", action.payload);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { SignupSuccess: true, data: action.payload }

    case SIGNUP_FAILED:
      return { SignupSuccess: false, error: action.payload }
    default:
      return state;
  }
}
