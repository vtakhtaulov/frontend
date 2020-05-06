import {combineReducers} from "redux";
import {getCross_device} from "../../action/journal_action/crossDevice_action";

const crossDevice_reduser = combineReducers({
    cross_device_info: getCross_device
});
export default crossDevice_reduser;