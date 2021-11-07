import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { postsReducer } from "./reducers/posts/postsReducer";
import { watchPostCommentsSaga, watchPostsSaga } from "./reducers/posts/postsSaga";
import { usersReducer } from "./reducers/users/usersReducer";
import { watchUsersSaga } from "./reducers/users/usersSaga";

export const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
});
export function* rootSaga(){
    yield all([fork(watchPostsSaga), fork(watchPostCommentsSaga), fork(watchUsersSaga)]);
}