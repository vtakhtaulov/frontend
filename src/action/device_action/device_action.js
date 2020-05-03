export function getAllDevice (state = [], action) {
    switch(action.type) {
        case "get_all_device_success":
            return action.device_info;
        default:
            return state;
    }
}