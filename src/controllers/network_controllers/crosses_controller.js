export function getCrossSuccess(type, crosses_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_crosses_success",
                crosses_info: crosses_info
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