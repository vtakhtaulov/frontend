import {combineReducers} from "redux";
import {getAllDevice} from "../../action/device_action/device_action";

const device_reduser = combineReducers({
    device_info: getAllDevice

});

export default device_reduser;