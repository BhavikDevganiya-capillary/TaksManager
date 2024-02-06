import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer, slideReducer, taskReducer } from "./Reducers/Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    Slides: slideReducer,
    Tasks: taskReducer,
    Products: productReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
