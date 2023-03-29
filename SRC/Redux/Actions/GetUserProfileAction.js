import { GET_USER_PROFILE_REQUEST } from "./Constant"

export const GetUserProfileAction = (params) => {
  return {
    type: GET_USER_PROFILE_REQUEST,
    params
  }
}


