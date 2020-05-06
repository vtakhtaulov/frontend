
export function getNetworkPoll(type, network_pool){
    switch (type) {
        case "all":
            return {
                type: "get_network_pool",
                network_pool: network_pool
            };
        default: return [];
    }
}
export function getAllNetworkPool (type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then( network_pool => dispatch(getNetworkPoll(type, network_pool)))
    }
}