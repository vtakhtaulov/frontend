const initialState = {
    visible: false
}

export function getActionUsers(state = initialState, action) {
    switch(action.type) {
        case "showDialog":
            return action.visible;
        default:
            return state;
    }
}
export function getDeleteActionUsers(state = initialState, action) {
    switch(action.type) {
        case "deleteDialog":
            return action.visible;
        default:
            return state;
    }
}