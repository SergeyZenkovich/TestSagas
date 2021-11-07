import { userActionsEnums, usersActions, usersStateType } from "./usersReducer.types"

const initialState = {
    users: [],
    isLoadingUsers: false,
}

export const usersReducer = (state: usersStateType = initialState, action: usersActions) => {

    switch(action.type){
        case userActionsEnums.LOAD_USERS: {
            return {...state, users: action.payload, isLoadingUsers: false}
        }
        case userActionsEnums.START_LOADING_USERS: {
            return {...state, isLoadingUsers: true}
        }
        default:
            return state
    }

}