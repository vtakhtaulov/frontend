import {combineReducers} from "redux";
import {
    getAllDevice,
    selectDeviceLastValue,
    selectDeviceValue,
    getInfoCrossDevicesEnd,
    getInfoCrossDevices
} from "../../action/device_action/device_action";

const device_reduser = combineReducers({
    device_info: getAllDevice,
    selectDeviceValue: selectDeviceValue,
    selectDeviceLastValue: selectDeviceLastValue,
    infoCrossDevicesEnd: getInfoCrossDevicesEnd,
    infoCrossDevices: getInfoCrossDevices
});

export default device_reduser;