import { loadUsersActionType, startLoadingUsersActionType, userActionsEnums } from "./usersReducer.types";


export const loadUsersAction = ( payload: UserType[]): loadUsersActionType => ({
    type: userActionsEnums.LOAD_USERS,
    payload
})
export const startLoadingUsersAction = (): startLoadingUsersActionType => ({
    type: userActionsEnums.START_LOADING_USERS,
})