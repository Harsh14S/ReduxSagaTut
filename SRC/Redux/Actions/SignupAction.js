import { SIGNUP_REQUEST } from "./Constant"

export const SignupAction = (params) => {
  return {
    type: SIGNUP_REQUEST,
    params
  }
}
