import { GET_USER_DATA_FAILED, GET_USER_DATA_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      // console.log("Reducer: ", action.payload);
      return { UserDataSuccess: true, data: action.payload }

    case GET_USER_DATA_FAILED:
      return { UserDataSuccess: false, data: action.payload }

    default:
      return state;
  }
}
