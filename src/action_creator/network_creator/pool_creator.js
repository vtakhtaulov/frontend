import {getDeviceSuccess} from "../device_creator/device_creator";

export function getPoolSuccess(type, pool_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_pool_success",
                pool_info: pool_info
            };
        default: return [];
    }

}

export function getAllPool(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(pool_info => dispatch(
                getPoolSuccess(type,pool_info))
            )
    }
}


export function setPool(type, url, data) {
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
            .then(pool_info => {
                return dispatch(getPoolSuccess(type, pool_info));
            })
    }
}

export function deletePool(type, url, data) {
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
            .then(pool_info => dispatch(
                getPoolSuccess(type,  pool_info))
            )
    }
}

export function updatePool(type, url, id,data) {
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
            .then(pool_info => dispatch(
                getPoolSuccess(type, pool_info))
            )
    }
}