import { loadPostsActionType, loadPostsCommentsActionType, postsActionsEnums, startFetchCommentsDataActionType, startFetchPostsDataActionType } from "./postsReducer.types";


export const loadPostsAction = (payload: PostType[]): loadPostsActionType => ({
    type: postsActionsEnums.LOAD_POSTS,
    payload
});
export const loadPostsCommentsAction = (payload: CommentType[]): loadPostsCommentsActionType => ({
    type: postsActionsEnums.LOAD_COMMENTS,
    payload
})
export const startFetchPostsDataAction = (payload: string): startFetchPostsDataActionType => ({
    type: postsActionsEnums.START_POSTS_LOADING,
    payload
})
export const startFetchCommentsDataAction = (payload: number): startFetchCommentsDataActionType => ({
    type: postsActionsEnums.START_COMMENTS_LOADING,
    payload
})