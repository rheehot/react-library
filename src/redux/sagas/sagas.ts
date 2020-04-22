import {put, takeEvery, all} from "redux-saga/effects";
import {INCREASE, INCREASE_ASYNC} from "../modules/counter";

function delay(ms: number) {
    new Promise(res => setTimeout(res, ms));
}

function* helloSaga() {
    console.log('Hello Sagas!');
}

function* increaseAsync () {
    yield delay(5000);
    yield put({type: INCREASE});
}

function* watchIncreaseAsync () {
    yield takeEvery(INCREASE_ASYNC, increaseAsync);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncreaseAsync()
    ]);
}
