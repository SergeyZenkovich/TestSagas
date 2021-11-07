import { postsActions, postsActionsEnums, postsStateType } from "./postsReducer.types"

const initialState = {
    posts: [],
    commetns: [],
    isPostsLoading: false,
    isCommentsLoading: false,
}

export const postsReducer = (state: postsStateType = initialState, action: postsActions) => {

    switch(action.type){
        case postsActionsEnums.LOAD_POSTS: {
            return {...state, posts: action.payload, isPostsLoading: false}
        }
        case postsActionsEnums.LOAD_COMMENTS: {
            return {...state, commetns: action.payload, isCommentsLoading: false}
        }
        case postsActionsEnums.START_POSTS_LOADING: {
            return {...state, isPostsLoading: true}
        }
        case postsActionsEnums.START_COMMENTS_LOADING: {
            return {...state, isCommentsLoading: true}
        }
        default:
            return state
    }

}