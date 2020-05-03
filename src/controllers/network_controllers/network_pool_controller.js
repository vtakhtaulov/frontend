
export function getNetworkPoll(network_pool){
    return {
        type: "get_network_pool",
        network_pool: network_pool
    }
}
export function getAllNetworkPool (url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(network_pool => dispatch(getNetworkPoll(network_pool)))
    }
}