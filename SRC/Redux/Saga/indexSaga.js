import { all } from "redux-saga/effects";

import GetProductSaga from "./GetProductSaga";
import GetSearchProductSaga from "./GetSearchProductSaga";
import GetUserProfileSaga from "./GetUserProfileSaga";
import LoginSaga from "./LoginSaga";
import SignupSaga from "./SignupSaga";
export default function* rootSaga() {
  yield all([
    GetProductSaga(),
    GetSearchProductSaga(),
    SignupSaga(),
    LoginSaga(),
    GetUserProfileSaga(),
  ])
}
