import {combineReducers} from "redux";
import {getCrosses} from "../../action/network_action/crosses_action";


const crosses_reduser = combineReducers({
    crosses_info: getCrosses
});

export default crosses_reduser;