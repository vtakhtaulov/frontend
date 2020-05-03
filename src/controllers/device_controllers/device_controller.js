export function getDeviceSuccess(type, device_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_device_success",
                device_info: device_info
            };
        default: return [];
    }

}

export function getAllDevice(type,url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(device_info => dispatch(
                getDeviceSuccess(type,device_info))
            )
    }
}