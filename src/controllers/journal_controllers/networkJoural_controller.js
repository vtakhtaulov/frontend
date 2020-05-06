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