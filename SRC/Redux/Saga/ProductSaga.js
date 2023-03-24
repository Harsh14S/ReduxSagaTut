import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../Actions/Constant';

function* getProducts() {
  let data = yield fetch('https://dummyjson.com/products');
  data = yield data.json();
  // console.log("data: ", data);
  yield put({ type: SET_PRODUCT_LIST, payload: data.products })
}

function* searchProducts(data) {
  let result = yield fetch(`https://dummyjson.com/products/search?q=${data.query}`);
  result = yield result.json();
  console.log("Searched Product List: ", data.query);
  yield put({ type: SET_PRODUCT_LIST, payload: result });
}

export default function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

//  ProductSaga;
