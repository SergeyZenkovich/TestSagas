import { postsActions, postsActionsEnums, postsStateType } from "./postsReducer.types"

const initialState = {
    posts: [],
    commetns: [],
    isPostsLoading: false,
}

export const postsReducer = (state: postsStateType = initialState, action: postsActions) => {

    switch(action.type){
        case postsActionsEnums.LOAD_POSTS: {
            return {...state, posts: action.payload}
        }
        case postsActionsEnums.LOAD_COMMENTS: {
            return {...state, commetns: action.payload}
        }
        case postsActionsEnums.IS_POSTS_LOADING: {
            return {...state, isPostsLoading: !state.isPostsLoading}
        }
        default:
            return state
    }

}