export function getAllDevice (state = [], action) {
    switch(action.type) {
        case "get_all_device_success":
            return action.device_info;
        default:
            return state;
    }
}
export function selectDeviceValue (state = [], action) {
    switch(action.type) {
        case "selectDeviceValue":
            return action.selectDeviceValue;
        default:
            return state;
}
}