export function getDhcp(state = [], action) {
    switch(action.type) {
        case "get_all_dhcp_success":
            return action.dhcp_info;
        default:
            return state;
    }
}

export function selectDhcp (state = [], action) {
    switch(action.type) {
        case "selectDhcpValue":
            return action.selectDhcpValue;
        default:
            return state;
    }
}