import { LOGIN_REQUEST } from "./Constant"

export const LoginAction = (params) => {
  // console.log("Action: ", params.user);
  return {
    type: LOGIN_REQUEST,
    params
  }
}
