// import createSagaMiddleware from "@redux-saga/core";
// import { configureStore } from "@reduxjs/toolkit";
// import indexReducer from "./Reducer/indexReducer";
// import ProductSaga from "./Saga/ProductSaga";

// const SagaMiddleware = createSagaMiddleware();
// const Store = configureStore({
//   reducer: indexReducer,
//   middleware: () => [SagaMiddleware]
// });

// SagaMiddleware.run(ProductSaga);
// export default Store;

import createSagaMiddleware from "redux-saga";
import { configureStore, createStore } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux'
import ProductSaga from "./Saga/indexSaga";
import indexReducer from "./Reducer/indexReducer";
// import ProductSaga from "./Saga";

const SagaMiddleware = createSagaMiddleware();
const Store = createStore(
  indexReducer,
  applyMiddleware(SagaMiddleware)
);
SagaMiddleware.run(ProductSaga);
export default Store;
