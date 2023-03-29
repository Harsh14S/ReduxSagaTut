import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      // console.log("Reducer: ", action.payload);
      return { UserProfileSuccess: true, data: action.payload }

    case GET_USER_PROFILE_FAILED:
      return { UserProfileSuccess: false, data: action.payload }

    default:
      return state;
  }
}
