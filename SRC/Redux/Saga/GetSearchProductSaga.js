import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Common/API"
import { GET_SEARCH_PRODUCT_LIST_FAILED, GET_SEARCH_PRODUCT_LIST_REQUEST, GET_SEARCH_PRODUCT_LIST_SUCCESS } from "../Actions/Constant";

export function* GetSearchProductAsync({ params }) {
  // console.log("Saga params: ", params);
  try {
    const response = yield call(API.getSearchProduct, params);
    // console.log("Saga response: ", response);
    yield put({ type: GET_SEARCH_PRODUCT_LIST_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_SEARCH_PRODUCT_LIST_FAILED, payload: e });
  }
}

export default function* GetSearchProductSaga() {
  yield takeEvery(GET_SEARCH_PRODUCT_LIST_REQUEST, GetSearchProductAsync);
}
