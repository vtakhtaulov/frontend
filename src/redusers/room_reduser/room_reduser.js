import {combineReducers} from "redux";
import {getRoom} from "../../action/room_action/room_action";

const room_reduser = combineReducers({
    room_info: getRoom
});

export default room_reduser;