export function getVlanSuccess(type, vlan_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_vlan_success",
                vlan_info: vlan_info
            };
        default: return [];
    }
}

export function getAllVlan(type, url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(vlan_info => dispatch(
                getVlanSuccess(type,vlan_info))
            )
    }
}