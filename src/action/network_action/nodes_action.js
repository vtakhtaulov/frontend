export function getNodes (state = [], action) {
    switch(action.type) {
        case "get_all_nodes_success":
            return action.nodes_info;
        default:
            return state;
    }
}