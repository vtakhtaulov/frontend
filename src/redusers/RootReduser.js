import { combineReducers } from 'redux';
import userReduser from "./users/usersReduser";

const rootReduser = combineReducers({
   userReduser: userReduser
})

export default rootReduser;