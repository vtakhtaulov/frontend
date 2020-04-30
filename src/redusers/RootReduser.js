import { combineReducers } from 'redux';
import user_reduser from "./users_reduser/users_reduser";

const root_reduser = combineReducers({
   user_reduser: user_reduser
})

export default root_reduser;