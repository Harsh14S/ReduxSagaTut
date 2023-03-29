import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Common/API"
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Actions/Constant";

export function* LoginAsync({ params }) {
  // console.log("Login Saga: ", params);
  try {
    const response = yield call(API.logIn, params)
    yield put({ type: LOGIN_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: LOGIN_FAILED, payload: e })
  }
}

export default function* LoginSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginAsync);
}
