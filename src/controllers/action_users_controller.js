export function setActionUsers(type, status){
    switch (type) {
        case "showDialog":
            return {
                type: "showDialog",
                visible: status
            };
        case "deleteDialog":
            return {
                type: "deleteDialog",
                visible: status
            };
        default: return [];
    }

}

export function setStatusShowDialog(type, status){
    return (dispatch) => dispatch(setActionUsers(type, status))
}
