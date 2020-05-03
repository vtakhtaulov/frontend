export function getUserSuccess(type, user_info){
    switch (type) {
        case "auth":
            return {
                type: "get_user_auth_success",
                user_auth_info: user_info
            };
        case "all":
            return {
                type: "get_all_user_success",
                user_info: user_info
            };
        default: return [];
    }

}

 export function getUser(type,url){
      return (dispatch) =>{
          fetch(url)
          .then(response =>{
              if(response.status!==200){
                  throw new Error(response.statusText)
              }
              return response;
          })
          .then(response => response.json())
          .then(user_info => dispatch(
              getUserSuccess(type,user_info))
          )
    }
}

