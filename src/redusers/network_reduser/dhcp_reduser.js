import {combineReducers} from "redux";
import {getDhcp, selectDhcp} from "../../action/network_action/dhcp_action";

const dhcp_reduser = combineReducers({
    dhcp_info: getDhcp,
    selectDhcp: selectDhcp
});

export default dhcp_reduser;