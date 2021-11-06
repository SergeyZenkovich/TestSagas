import { userActionsEnums, usersActions, usersStateType } from "./usersReducer.types"

const initialState = {
    users: [],
    isLoadingUsers: false,
}

export const usersReducer = (state: usersStateType = initialState, action: usersActions) => {

    switch(action.type){
        case userActionsEnums.LOAD_USERS: {
            return {...state, users: action.payload}
        }
        case userActionsEnums.IS_LOADING_USERS: {
            return {...state, isLoadingUsers: !state.isLoadingUsers}
        }
        default:
            return state
    }

}