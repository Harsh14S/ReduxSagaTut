import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../Actions/Constant';

function* getProducts() {
  let data = yield fetch('http://localhost:3500/Products');
  data = yield data.json();
  // console.log("data: ", data);
  yield put({ type: SET_PRODUCT_LIST, payload: data })
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/Products?q=${data.query}`);
  result = yield result.json();
  console.log("Searched Product List: ", data.query);
  yield put({ type: SET_PRODUCT_LIST, payload: result })
}

export default function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

//  ProductSaga;
