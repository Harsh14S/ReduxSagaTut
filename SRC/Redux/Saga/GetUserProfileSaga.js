import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Common/API"
import { GET_USER_PROFILE_FAILED, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS } from "../Actions/Constant";

export function* GetUserProfileAsync({ params }) {
  // console.log("Saga params: ", params);
  try {
    const response = yield call(API.getUserProfile, params);
    // console.log("Saga response: ", response);
    yield put({ type: GET_USER_PROFILE_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_USER_PROFILE_FAILED, payload: e });
  }
}

export default function* GetUserProfileSaga() {
  yield takeEvery(GET_USER_PROFILE_REQUEST, GetUserProfileAsync);
}
