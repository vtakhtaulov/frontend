export function getConfigurationSuccess(type, config_dev_info){
    switch (type) {
        case "all":
            return {
                type: "get_all_configuration_success",
                config_dev_info: config_dev_info
            };
        default: return [];
    }

}

export function getAllConfiguration(type,url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(config_dev_info => dispatch(
                getConfigurationSuccess(type,config_dev_info))
            )
    }
}