import React from 'react'
import { createSelector } from 'reselect'
import { RootState } from '../store'

const getPostsSelector = (state: RootState) => state.posts.posts;
const getPostCommentsSelector = (state: RootState) => state.posts.commetns;
const getPostsIsLoadingSelector = (state: RootState) => state.posts.isPostsLoading;
const getPostCommentsIsLoadingSelector = (state: RootState) => state.posts.isCommentsLoading;

export const selectPosts = createSelector(getPostsSelector, (posts)=> posts);
export const selectComments = createSelector(getPostCommentsSelector, (comments)=> comments);
export const selectPostsIsLoading = createSelector(getPostsIsLoadingSelector, (isPostsLoading)=> isPostsLoading);
export const selectCommentsIsLoading  = createSelector(getPostCommentsIsLoadingSelector, (isCommentsLoading)=> isCommentsLoading);


const getUsersSelector = (state: RootState) => state.users.users;
const getUsersIsLoadingSelector = (state: RootState) => state.users.isLoadingUsers;

export const selectUsers = createSelector(getUsersSelector, (users)=> users);
export const selectUsersIsLoading = createSelector(getUsersIsLoadingSelector, (isPostsLoading)=> isPostsLoading);