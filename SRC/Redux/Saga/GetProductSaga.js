import { call, takeEvery, put } from "redux-saga/effects";
import API from "../../Common/API";
import { GET_PRODUCT_LIST_FAILED, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS } from "../Actions/Constant";

export function* GetProductAsync({ params }) {
  try {
    // console.log("Params: ", params);
    const response = yield call(API.getProduct, params);
    yield put({ type: GET_PRODUCT_LIST_SUCCESS, payload: response });
    // console.log("Response: ", response);
  } catch (e) {
    yield put({ type: GET_PRODUCT_LIST_FAILED, payload: e })
  }
}

export default function* GetProductSaga() {
  yield takeEvery(GET_PRODUCT_LIST_REQUEST, GetProductAsync);
}
