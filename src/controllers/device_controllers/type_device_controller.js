export function getTypeDeviceSuccess(type, type_device_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_type_device_success",
                type_device_info: type_device_info
            };
        default: return [];
    }
}

export function getAllTypeDevice(url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(type_device_info => dispatch(
                getTypeDeviceSuccess("all",type_device_info))
            )
    }
}