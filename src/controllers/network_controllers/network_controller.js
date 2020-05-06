
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