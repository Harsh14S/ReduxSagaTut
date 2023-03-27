import { call, put, takeEvery } from "redux-saga/effects"
import API from "../../Common/API"
import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../Actions/Constant";

export function* SignupAsync({ params }) {
  console.log("Saga: ", params);
  try {
    const response = yield call(API.signUp, params);
    yield put({ type: SIGNUP_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: SIGNUP_FAILED, payload: e })
  }
}

export default function* SignupSaga() {
  yield takeEvery(SIGNUP_REQUEST, SignupAsync);
}

