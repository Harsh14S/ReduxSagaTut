import { GET_PRODUCT_LIST_REQUEST } from "./Constant"

export const GetProductAction = (params) => {
  return {
    type: GET_PRODUCT_LIST_REQUEST,
    params
  }
}


