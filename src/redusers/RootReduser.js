import { combineReducers } from 'redux';
import user_reduser from "./users_reduser/users_reduser";
import networ_pool_reduser from "./network_reduser/network_pool_reduser";
import device_reduser from "./device_reduser/device_reduser";
import type_device_reduser from "./device_reduser/type_device_reduser";
import room_reduser from "./room_reduser/room_reduser";
import nodes_reduser from "./network_reduser/nodes_reduser";

const root_reduser = combineReducers({
   user_reduser: user_reduser,
   networ_pool_reduser: networ_pool_reduser,
   device_reduser: device_reduser,
   type_device_reduser: type_device_reduser,
   room_reduser: room_reduser,
   nodes_reduser: nodes_reduser
})

export default root_reduser;