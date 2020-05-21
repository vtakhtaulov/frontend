export function getRoomSuccess(type, room_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_room_success",
                room_info: room_info
            };
        default: return [];
    }
}
export function getRoomSelect(type, data){
    switch (type) {
        case "selectRoomValue":
            return {
                type: "selectRoomValue",
                selectRoomValue: data
            };
        default: return [];
    }
}

export function getAllRoom(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(room_info => dispatch(
                getRoomSuccess(type ,room_info))
            )
    }
}