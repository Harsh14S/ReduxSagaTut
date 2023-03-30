
import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Common/API"
import { GET_USER_DATA_FAILED, GET_USER_DATA_REQUEST, GET_USER_DATA_SUCCESS } from "../Actions/Constant";

export function* GetUserDataAsync() {
  // console.log("GetUserDataAsync params: ", params);
  try {
    const response = yield call(API.getUserData);
    // console.log("GetUserDataSaga response: ", response);
    yield put({ type: GET_USER_DATA_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_USER_DATA_FAILED, payload: e });
  }
}

export default function* GetUserDataSaga() {
  yield takeEvery(GET_USER_DATA_REQUEST, GetUserDataAsync);
}
