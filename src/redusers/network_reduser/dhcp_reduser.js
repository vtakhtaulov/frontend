import {combineReducers} from "redux";
import {getDhcp} from "../../action/network_action/dhcp_action";


const dhcp_reduser = combineReducers({
    dhcp_info: getDhcp
});

export default dhcp_reduser;