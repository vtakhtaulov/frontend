import {combineReducers} from "redux";
import {getAllDevice, selectDeviceLastValue, selectDeviceValue} from "../../action/device_action/device_action";

const device_reduser = combineReducers({
    device_info: getAllDevice,
    selectDeviceValue: selectDeviceValue,
    selectDeviceLastValue: selectDeviceLastValue
});

export default device_reduser;