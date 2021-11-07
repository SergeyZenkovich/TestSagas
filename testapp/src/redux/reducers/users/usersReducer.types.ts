export enum userActionsEnums {
    LOAD_USERS = 'LOAD-USERS',
    START_LOADING_USERS = 'START-LOADING-USERS',
}

export type loadUsersActionType = {
    type: userActionsEnums.LOAD_USERS,
    payload: UserType[]
}
export type startLoadingUsersActionType = {
    type: userActionsEnums.START_LOADING_USERS,
}

export type usersActions = loadUsersActionType | startLoadingUsersActionType;

export type usersStateType =  {
    users: UserType[],
    isLoadingUsers: boolean,
 }