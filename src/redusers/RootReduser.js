import { combineReducers } from 'redux';
import {userReduser}  from "../actions/UsersAction";

const rootReduser = combineReducers({
    user_info: userReduser
})

export default rootReduser;