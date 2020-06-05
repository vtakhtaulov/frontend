
export function getNetwork(type, all_network){
    switch (type) {
        case "all":
            return {
                type: "get_network",
                all_network: all_network
            };
        default: return [];
    }
}
export function getAllNetwork(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then( all_network => dispatch(getNetwork(type, all_network)))
    }
}

export function getNetworkSelect(type, data){
    switch (type) {
        case "selectNetworkValue":
            return {
                type: "selectNetworkValue",
                selectNetworkValue: data
            };
        default: return [];
    }
}

export function setNetwork(type, url, data) {
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
            .then(all_network => {
                return dispatch(getNetwork(type, all_network));
            })
    }
}

export function deleteNetwork(type, url, data) {
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
            .then(all_network => dispatch(
                getNetwork(type,  all_network))
            )
    }
}

export function updateNetwork(type, url, id,data) {
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
            .then(all_network => dispatch(
                getNetwork(type, all_network))
            )
    }
}