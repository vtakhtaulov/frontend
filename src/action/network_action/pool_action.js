export function getPool (state = [], action) {
    switch(action.type) {
        case "get_all_pool_success":
            return action.pool_info;
        default:
            return state;
    }
}