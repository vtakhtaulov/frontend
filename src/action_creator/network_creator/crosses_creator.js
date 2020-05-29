
export function getCrossSuccess(type, crosses_info){
    switch (type) {
        case "all":
            crosses_info.push({
                id_crosses: null,
                id_crosses_end: null,
                id_crosses_first: null,
                infoCrosses: null,
                port: null,
                shkaf: null,
                slot: null
            });
            return {
                type: "get_all_crosses_success",
                crosses_info: crosses_info
            };
        default: return [];
    }

}
export function getCrossSelect(type, data){
    switch (type) {
        case "selectCrossesValue":
            return {
                type: "selectCrossesValue",
                selectCrossesValue: data
            };
        default: return [];
    }
}

export function getAllCrosses(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(crosses_info => dispatch(
                getCrossSuccess(type,crosses_info))
            )
    }
}

export function setCrosses(type, url, data) {
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
            .then(crosses_info => {
                return dispatch(getCrossSuccess(type, crosses_info));
            })
    }
}

export function deleteCrosses(type, url, data) {
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
            .then(crosses_info => dispatch(
                getCrossSuccess(type,  crosses_info))
            )
    }
}

export function updateCrosses(type, url, id,data) {
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
            .then(crosses_info => dispatch(
                getCrossSuccess(type, crosses_info))
            )
    }
}