import {take} from 'redux-saga/effects';
export function* workerSaga(){
    console.log('clicked!')
}
export function* watchClickSaga(){
    yield take('CLICK');
    yield workerSaga();
}
export default function* rootSaga(){
    yield watchClickSaga();
}