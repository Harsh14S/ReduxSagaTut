import { GET_SEARCH_PRODUCT_LIST_FAILED, GET_SEARCH_PRODUCT_LIST_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SEARCH_PRODUCT_LIST_SUCCESS:
      // console.log("Reducer: ", action.payload);
      return { SearchProductSuccess: true, data: action.payload }

    case GET_SEARCH_PRODUCT_LIST_FAILED:
      return { SearchProductSuccess: false, data: action.payload }

    default:
      return state;
  }
}
