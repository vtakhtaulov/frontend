import {combineReducers} from "redux";
import {getVlan} from "../../action/network_action/vlan_action";


const vlan_reduser = combineReducers({
    vlan_info: getVlan
});

export default vlan_reduser;