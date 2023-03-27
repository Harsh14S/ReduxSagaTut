import { call, put, takeEvery } from "redux-saga/effects";
import API from "../../Common/API"
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Actions/Constant";

export function* LoginAsync({ params }) {
  console.log("Saga: ", params);
  try {
    const response = yield call(API.logIn, params)
    yield put({ type: LOGIN_SUCCESS, payaload: response })
  } catch (e) {
    yield put({ type: LOGIN_FAILED, payaload: e })
  }
}

export default function* LoginSaga() {
  yield takeEvery(LOGIN_REQUEST, LoginAsync);
}
