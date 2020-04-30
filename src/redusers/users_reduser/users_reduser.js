import {user_allusers, user_auth} from "../../action/user_action/user_action";
import {combineReducers} from "redux";


const user_reduser = combineReducers({
    user_auth_info: user_auth,
    user_info: user_allusers
});

export default user_reduser;