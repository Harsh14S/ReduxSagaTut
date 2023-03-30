import { GET_USER_PROFILE_REQUEST } from "./Constant"

export const GetUserProfileAction = (params) => {
  // console.log("GetUserProfileAction Action: ", params);
  return {
    type: GET_USER_PROFILE_REQUEST,
    params
  }
}


