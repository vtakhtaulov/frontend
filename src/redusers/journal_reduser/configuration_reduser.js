import {combineReducers} from "redux";
import {getConfiguration} from "../../action/journal_action/configuration_action";

const configuration_reduser = combineReducers({
    config_dev_info: getConfiguration
});
export default configuration_reduser;