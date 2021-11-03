import {take, takeEvery, takeLatest, takeLeading, call} from 'redux-saga/effects';

const getPeople = async(): Promise<any> => {
    const requestData = await (await fetch('https://swapi.dev/api/people')).json();
    return requestData;
}

export function* workerSaga(): Generator{
    const data = yield call(getPeople);
    console.log(data);
}
// export function* watchClickSaga(){
//     yield take('CLICK');
//     yield workerSaga();
// }
export function* watchClickSagaTwo(){
    yield takeLeading('CLICK2', workerSaga);

}
export default function* rootSaga(){
    // yield watchClickSaga();
    yield watchClickSagaTwo();
}