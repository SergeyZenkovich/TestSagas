import {take, takeEvery, takeLatest, takeLeading, call, all, fork} from 'redux-saga/effects';

export function* workerSaga(): Generator{
    const data = yield call(getPeople);
    console.log(data);
}
export function* watchClickSagaTwo(){
    yield takeLeading('CLICK2', workerSaga);

}
export default function* rootSaga(){
    // yield watchClickSaga();
    yield all([fork(watchClickSagaTwo)]);
}