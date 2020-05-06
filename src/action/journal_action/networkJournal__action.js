export function getNetwork_Journal (state = [], action) {
    switch(action.type) {
        case "get_all_network_journal_success":
            return action.network_journal_info;
        default:
            return state;
    }
}