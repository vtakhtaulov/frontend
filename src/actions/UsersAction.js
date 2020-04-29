const  initialState = {
    user_info: []
}

export function userReduser(state = initialState,action){
    switch(action.type){
        case "get_user_auth_success":
            return action.user_info;
        default:
            return state;
    }
}