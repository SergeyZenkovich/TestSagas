export enum postsActionsEnums {
    LOAD_POSTS = 'LOAD-POSTS',
    IS_POSTS_LOADING = 'IS-POSTS-LOADING',
    LOAD_COMMENTS = 'LOAD-COMMENTS',
}

export type loadPostsAction = {
    type: postsActionsEnums.LOAD_POSTS,
    payload: PostType[]
}
export type loadPostsCommentsAction = {
    type: postsActionsEnums.LOAD_COMMENTS,
    payload: CommentType[]
}
export type isPostsLoadingAction = {
    type: postsActionsEnums.IS_POSTS_LOADING,
}

export type postsActions = loadPostsAction | isPostsLoadingAction | loadPostsCommentsAction;

export type postsStateType =  {
    posts: PostType[],
    commetns: CommentType[],
    isPostsLoading: boolean,
 }