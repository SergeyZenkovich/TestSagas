export enum postsActionsEnums {
    LOAD_POSTS = 'LOAD-POSTS',
    START_POSTS_LOADING = 'START-POSTS-LOADING',
    LOAD_COMMENTS = 'LOAD-COMMENTS',
    START_COMMENTS_LOADING = 'START-COMMENTS-LOADING',
}

export type loadPostsActionType = {
    type: postsActionsEnums.LOAD_POSTS,
    payload: PostType[]
}
export type loadPostsCommentsActionType = {
    type: postsActionsEnums.LOAD_COMMENTS,
    payload: CommentType[]
}
export type startFetchPostsDataActionType = {
    type: postsActionsEnums.START_POSTS_LOADING,
    payload: string;
}
export type startFetchCommentsDataActionType = {
    type: postsActionsEnums.START_COMMENTS_LOADING,
    payload: number
}

export type postsActions = loadPostsActionType | loadPostsCommentsActionType | startFetchPostsDataActionType | startFetchCommentsDataActionType;

export type postsStateType =  {
    posts: PostType[],
    commetns: CommentType[],
    isPostsLoading: boolean,
    isCommentsLoading: boolean,
 }