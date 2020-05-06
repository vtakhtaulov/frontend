export function getNodesSuccess(type, nodes_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_nodes_success",
                nodes_info: nodes_info
            };
        default: return [];
    }
}

export function getAllNodes(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(nodes_info => dispatch(
                getNodesSuccess(type ,nodes_info))
            )
    }
}