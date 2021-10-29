enum userActionsEnums {
    LOAD_USERS = 'LOAD-USERS',
    REMOVE_USERS = 'REMOVE-USERS',
}

type loadUsersAction = {
    type: userActionsEnums.LOAD_USERS,
    payload: userType[]
}
type removeUsersAction = {
    type: userActionsEnums.REMOVE_USERS,
}

type usersActions = loadUsersAction | removeUsersAction


type userType = {
    firstName: string,
    lastName: string,
}
type stateType =  {
    users: userType[]
 }
const initialState = {
    users: [{firstName: 'John', lastName: 'Doe'}]
}



export const rootReducer = (state: stateType = initialState, action: usersActions) => {

    switch(action.type){
        case userActionsEnums.LOAD_USERS: {
            return {...state, users: action.payload}
        }
        case userActionsEnums.REMOVE_USERS: {
            return {...state, users: []}
        }
        default:
            return state
    }

}