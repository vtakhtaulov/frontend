import {getActionUsers, getDeleteActionUsers} from "../action/visible_action";
import {combineReducers} from "redux";


const action_user_reduser = combineReducers({
    visible: getActionUsers,
    deleteVisible: getDeleteActionUsers
});

export default action_user_reduser;
