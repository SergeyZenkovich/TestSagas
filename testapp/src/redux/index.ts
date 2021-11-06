import { combineReducers } from "redux";
import { postsReducer } from "./reducers/posts/postsReducer";
import { usersReducer } from "./reducers/users/usersReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    options: usersReducer,
});