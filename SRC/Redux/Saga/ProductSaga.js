import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../Actions/Constant';

function* getProducts() {
  let data = yield fetch('http://localhost:3000/Products');
  data = yield data.json();
  // console.log("data: ", data);
  yield put({
    type: SET_PRODUCT_LIST,
    payload: data,
  })
}

function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts)
}

export default ProductSaga;
