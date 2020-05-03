export function all_network_pool(state = [], action){
    switch(action.type){
        case "get_network_pool":
            return action.network_pool;

        default:
            return state;
    }
}
