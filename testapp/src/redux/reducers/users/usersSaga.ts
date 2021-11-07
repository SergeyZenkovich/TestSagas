import { takeLatest, call, put} from 'redux-saga/effects';
import { getAllUsers } from '../../../API/requests';
import { loadUsersAction } from './usersActions';
import { userActionsEnums } from './usersReducer.types';

export function* workerUsersFetchingSaga(){
    const data: UserType[] = yield call(getAllUsers);
    yield put(loadUsersAction(data));
}

export function* watchUsersSaga(){
    yield takeLatest(userActionsEnums.START_LOADING_USERS, workerUsersFetchingSaga);
}


