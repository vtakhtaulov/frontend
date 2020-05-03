import {combineReducers} from "redux";
import {getNodes} from "../../action/network_action/nodes_action";


const room_reduser = combineReducers({
    nodes_info: getNodes
});

export default room_reduser;