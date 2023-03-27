import { all } from "redux-saga/effects";

import GetProductSaga from "./GetProductSaga";
import LoginSaga from "./LoginSaga";
import SignupSaga from "./SignupSaga";
export default function* rootSaga() {
  yield all([
    GetProductSaga(),
    SignupSaga(),
    LoginSaga(),
  ])
}
