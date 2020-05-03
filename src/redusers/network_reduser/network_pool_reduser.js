import {combineReducers} from "redux";
import {all_network_pool} from "../../action/network_action/network_pool_action";


const networ_pool_reduser = combineReducers({
    all_network_pool: all_network_pool
});

export default networ_pool_reduser;