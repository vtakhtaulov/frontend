export function getConfiguration (state = [], action) {
    switch(action.type) {
        case "get_all_configuration_success":
            return action.config_dev_info;
        default:
            return state;
    }
}