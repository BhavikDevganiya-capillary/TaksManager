import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataFail, fetchDataSuccess } from "./Actions/Actions";
import { FETCH_DATA_REQUEST } from "./Constants/Constants";

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      `https://dummyjson.com/products?limit=7`
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default rootSaga;
