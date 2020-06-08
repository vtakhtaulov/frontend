import {combineReducers} from "redux";
import {getDhcp, selectDHCP} from "../../action/network_action/dhcp_action";

const dhcp_reduser = combineReducers({
    dhcp_info: getDhcp,
    selectDhcpValue: selectDHCP
});

export default dhcp_reduser;