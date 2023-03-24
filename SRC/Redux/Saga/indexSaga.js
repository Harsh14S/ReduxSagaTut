import { all } from "redux-saga/effects";

import GetProductSaga from "./GetProductSaga";
export default function* rootSaga() {
  yield all([
    GetProductSaga(),
  ])
}
