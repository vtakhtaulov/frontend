import axios from 'axios';

export function getAuthUserInfoSuccess(user_auth_info){
    return {
        type: "get_user_auth_success",
        user_auth_info: user_auth_info
    }
}
export function getAllUserInfoSuccess(user_info){
    return {
        type: "get_all_user_success",
        user_info: user_info
    }
}

 export function getAuthUser (url){
      return (dispatch) =>{
          fetch(url)
          .then(response =>{
              if(response.status!==200){
                  throw new Error(response.statusText)
              }
              return response;
          })
          .then(response => response.json())
          .then(user_auth_info => dispatch(getAuthUserInfoSuccess(user_auth_info)))
    }
}

export function getAllUser (url){
    return (dispatch) =>{
        fetch(url)
            .then(response =>{
                if(response.status!==200){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(user_info => dispatch(getAllUserInfoSuccess(user_info)))
    }
}






export const allUsers =()=>{
    return (dispatch) =>{
       let baseUrl = "http://localhost:8080/User";
        axios.get(baseUrl+"/AllUser").then(response => {
            dispatch(getAuthUserInfoSuccess(response.data));
            return response;
        });
    }
}

export class User_controller{

    getAll(){
        return 0
    }

}
/*
export class AuthController{
    baseUrl = "http://localhost:8080/User/loginUser?user_login=";
    async logIN(login,password){
        return await axios.get(this.baseUrl+login+"&user_password="+password)
            .then(res =>res.data);
    }
}
*/