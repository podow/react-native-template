import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginAction,
  loginActionDone,
  loginActionFail,
  loginHandle,
  logoutAction,
  logoutActionDone,
} from "./actions";

function* loginFlow({ payload }) {
  const setAuthToken = async token => {
    try {
      await AsyncStorage.setItem("@token", token);
    } catch (e) {
      throw e;
    }
  };

  try {
    const { data } = yield call(loginApi, payload);
    if (data.data.token) {
      yield put(loginActionDone(data.data));
      yield setAuthToken(data.data.token);
      yield put(loginHandle(true));
    }
  } catch (e) {
    console.error(e);
    yield put(loginActionFail());
    yield put(loginHandle(false));
  }
}

function* logoutFlow() {
  const removeAuthToken = async () => {
    try {
      await AsyncStorage.removeItem("@token");
    } catch (e) {
      throw e;
    }
  };

  yield removeAuthToken();
  yield put(loginHandle(false));
  yield put(logoutActionDone());
}

export default function* authSaga() {
  yield takeLatest(loginAction, loginFlow);
  yield takeLatest(logoutAction, logoutFlow);
}
