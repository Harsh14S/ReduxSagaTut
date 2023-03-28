import { GET_PRODUCT_LIST_FAILED, GET_PRODUCT_LIST_SUCCESS } from "../Actions/Constant";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
      // console.log("Reducer", action.payload);
      return { ProductSuccess: true, data: action.payload }

    case GET_PRODUCT_LIST_FAILED:
      return { ProductSuccess: false, data: action.payload }

    default:
      return state;
  }
}
