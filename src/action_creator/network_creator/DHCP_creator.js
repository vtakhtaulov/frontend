
export function getDHCPSuccess(type, dhcp_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_dhcp_success",
                dhcp_info: dhcp_info
            };
        default: return [];
    }
}

export function getDHCPSelect(type, data){
    switch (type) {
        case "selectDHCPValue":
            return {
                type: "selectDHCPValue",
                selectDHCPValue: data
            };
        default: return [];
    }
}

export function getAllDHCP(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then( dhcp_info => dispatch(
                getDHCPSuccess(type,dhcp_info))
            )
    }
}


export function setDHCP(type, url, data) {
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
            .then(dhcp_info => {
                return dispatch(getDHCPSuccess(type, dhcp_info));
            })
    }
}

export function deleteDHCP(type, url, data) {
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
            .then(dhcp_info => dispatch(
                getDHCPSuccess(type,  dhcp_info))
            )
    }
}

export function updateDHCP(type, url, id,data) {
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
            .then(dhcp_info => dispatch(
                getDHCPSuccess(type, dhcp_info))
            )
    }
}