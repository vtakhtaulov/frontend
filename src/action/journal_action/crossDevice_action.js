export function getCross_device (state = [], action) {
    switch(action.type) {
        case "get_all_cross_device_success":
            return action.cross_device_info;
        default:
            return state;
    }
}