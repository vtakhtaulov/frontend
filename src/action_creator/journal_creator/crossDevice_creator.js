
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

export function setCrossDevice(type, url, data) {
    return (dispatch) => {
        fetch(url, {
            credentials: "same-origin", //передаем сессионные данные
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(cross_device_info => {
                return dispatch(getCrossDeviceSuccess(type, cross_device_info));
            })
    }
}

export function deleteCrossDevice(type, url, data) {
    return (dispatch) => {
        fetch(url + data, {
            credentials: "same-origin", //передаем сессионные данные
            method: 'DELETE'
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(cross_device_info => dispatch(
                getCrossDeviceSuccess(type,  cross_device_info))
            )
    }
}

export function updateCrossDevice(type, url, id,data) {
    return (dispatch) => {
        fetch(url+id, {
            credentials: "same-origin", //передаем сессионные данные
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(cross_device_info => dispatch(
                getCrossDeviceSuccess(type, cross_device_info))
            )
    }
}