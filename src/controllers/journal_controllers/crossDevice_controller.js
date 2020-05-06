export function getCrossDeviceSuccess(type, cross_device_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_cross_device_success",
                cross_device_info: cross_device_info
            };
        default: return [];
    }

}

export function getAllCrossDevice(type,url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(cross_device_info => dispatch(
                getCrossDeviceSuccess(type,cross_device_info))
            )
    }
}