import { PRODUCT_LIST, SEARCH_PRODUCT } from "./Constant"
// https://jsonplaceholder.typicode.com/todos

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  }
}

export const searchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  }
}
