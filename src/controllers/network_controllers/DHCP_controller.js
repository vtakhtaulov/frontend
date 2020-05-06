export function getDHCPSuccess(type, dhcp_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_dhcp_success",
                dhcp_info: dhcp_info
            };
        default: return [];
    }

}

export function getAllDHCP(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then( dhcp_info => dispatch(
                getDHCPSuccess(type,dhcp_info))
            )
    }
}