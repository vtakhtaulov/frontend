import { combineReducers } from 'redux';
import {userReduser}  from ".//user/UserPageReduser.js";

const rootReduser = combineReducers({
    user_info: userReduser
})

export default rootReduser;