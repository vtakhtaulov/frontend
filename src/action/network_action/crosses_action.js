export function getCrosses (state = [], action) {
    switch(action.type) {
        case "get_all_crosses_success":
            return action.crosses_info;
        default:
            return state;
    }
}