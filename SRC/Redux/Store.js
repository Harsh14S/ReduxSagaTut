// import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Reducer/RootReducer";
import ProductSaga from "./Saga/ProductSaga";

const SagaMiddleware = createSagaMiddleware();
const Store = configureStore({
  reducer: RootReducer,
  middleware: () => [SagaMiddleware]
});

SagaMiddleware.run(ProductSaga);
export default Store;
