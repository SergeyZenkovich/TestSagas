import { takeLatest, call, put} from 'redux-saga/effects';
import { getComments, getPosts } from '../../../API/requests';
import { loadPostsAction, loadPostsCommentsAction } from './postActions';
import { postsActionsEnums, startFetchCommentsDataActionType, startFetchPostsDataActionType } from './postsReducer.types';

export function* workerPostsFetchingSaga(action: startFetchPostsDataActionType){
    const data: PostType[] = yield call(getPosts, action.payload);
    yield put(loadPostsAction(data));
}
export function* workerPostCommentsFetchingSaga(action: startFetchCommentsDataActionType){
    const data: CommentType[] = yield call(getComments, action.payload);
    yield put(loadPostsCommentsAction(data));
}
export function* watchPostsSaga(){
    yield takeLatest(postsActionsEnums.START_POSTS_LOADING, workerPostsFetchingSaga);
}
export function* watchPostCommentsSaga(){
    yield takeLatest(postsActionsEnums.START_COMMENTS_LOADING, workerPostCommentsFetchingSaga);
}


