import {combineReducers} from "redux";
import {getPool} from "../../action/network_action/pool_action";


const pool_reduser = combineReducers({
    pool_info: getPool
});

export default pool_reduser;