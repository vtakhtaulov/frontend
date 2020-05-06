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