import {combineReducers} from "redux";
import {all_network} from "../../action/network_action/network_action";


const networ_reduser = combineReducers({
    all_network: all_network
});

export default networ_reduser;