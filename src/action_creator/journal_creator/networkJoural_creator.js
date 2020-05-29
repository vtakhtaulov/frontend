
export function getNetworkJournalSuccess(type, network_journal_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_network_journal_success",
                network_journal_info: network_journal_info
            };
        default: return [];
    }

}
export async function setSelectNetworkJournal (state = [], action) {
    switch(action.type) {
        case "selectNetwork_JournalValue":
            return {
                type: "selectNetwork_JournalValue",
                selectNetwork_JournalValue: action.selectNetwork_JournalValue
            }
        default:
            return state;
    }
}
export function getAllNetworkJournal(type,url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(network_journal_info => dispatch(
                getNetworkJournalSuccess(type,network_journal_info))
            )
    }
}


export function setNetworkJournal(type, url, data) {
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
            .then(network_journal_info => {
                return dispatch(
                    getNetworkJournalSuccess(type, network_journal_info));
            })
    }
}

export function deleteNetworkJournal(type, url, data) {
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
            .then(network_journal_info => dispatch(
                getNetworkJournalSuccess(type,  network_journal_info))
            )
    }
}

export function updateNetworkJournal(type, url, id,data) {
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
            .then(network_journal_info => dispatch(
                getNetworkJournalSuccess(type, network_journal_info))
            )
    }
}