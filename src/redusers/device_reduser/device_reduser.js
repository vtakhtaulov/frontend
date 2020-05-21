import {combineReducers} from "redux";
import {getAllDevice, selectDeviceValue} from "../../action/device_action/device_action";

const device_reduser = combineReducers({
    device_info: getAllDevice,
    selectDeviceValue: selectDeviceValue
});

export default device_reduser;