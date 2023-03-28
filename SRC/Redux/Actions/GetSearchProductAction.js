import { GET_SEARCH_PRODUCT_LIST_REQUEST } from "./Constant"

export const GetSearchProductAction = (params) => {
  return {
    type: GET_SEARCH_PRODUCT_LIST_REQUEST,
    params
  }

}
