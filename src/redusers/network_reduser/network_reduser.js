import {combineReducers} from "redux";
import {all_network, selectNetwork} from "../../action/network_action/network_action";

const networ_reduser = combineReducers({
    all_network: all_network,
    selectNetwork: selectNetwork
});

export default networ_reduser;