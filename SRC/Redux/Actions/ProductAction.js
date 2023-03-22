import { PRODUCT_LIST } from "./Constant"
// https://jsonplaceholder.typicode.com/todos

export const productList = async () => {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  data = await data.json();
  console.log("data: ", data);
  return {
    type: PRODUCT_LIST,
    payload: data,
  }
}
