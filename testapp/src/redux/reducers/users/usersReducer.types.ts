export enum userActionsEnums {
    LOAD_USERS = 'LOAD-USERS',
    IS_LOADING_USERS = 'IS-LOADING-USERS',
}

export type loadUsersAction = {
    type: userActionsEnums.LOAD_USERS,
    payload: UserType[]
}
export type isLoadingUsersAction = {
    type: userActionsEnums.IS_LOADING_USERS,
}

export type usersActions = loadUsersAction | isLoadingUsersAction

export type usersStateType =  {
    users: UserType[],
    isLoadingUsers: boolean,
 }