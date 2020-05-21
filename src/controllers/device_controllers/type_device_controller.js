

export function getTypeDeviceSuccess(type, type_device_info){
    switch (type) {
        case "all":
            type_device_info.push({
                id_type_dev: 0,
                name_type_dev: ""
            });
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

export function setTypeDevice(type, url, data) {
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
            .then(type_device_info => {
                return dispatch(getTypeDeviceSuccess(type, type_device_info));
            })
    }
}

export function deleteTypeDevice(type, url, data) {
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
            .then(type_device_info => dispatch(
                getTypeDeviceSuccess(type,  type_device_info))
            )
    }
}

export function updateTypeDevice(type, url, id,data) {
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
            .then(type_device_info => dispatch(
                getTypeDeviceSuccess(type, type_device_info))
            )
    }
}