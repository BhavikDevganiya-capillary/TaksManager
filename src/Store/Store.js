import { createStore, combineReducers } from "redux";
import { slideReducer, taskReducer } from "./Reducers/Reducers";

const store = createStore(
  combineReducers({
    Slides: slideReducer,
    Tasks: taskReducer,
  })
);

export default store;
