import axios from 'axios';

export function getAuthUserInfoSuccess(user_info){
    return {
        type: "get_user_auth_success",
        user_info: user_info
    }
}

 export function getAuthUser (url){
      return (dispatch) =>{
          fetch(url)
          .then(response =>{
              if(response.status!== 200){
                  throw new Error(response.statusText)
              }
              return response;
          })
          .then(response => response.json())
          .then(user_info => dispatch(getAuthUserInfoSuccess(user_info)))
    }

}
/*
export function getAuthUser (url){
    return  dispatch =>{
       const response = fetch(url);
       const json = response.json();
       dispatch(getAuthUserInfoSuccess(json));
    }
}*/

export class UserController{
    baseUrl = "http://localhost:8080/User";
    getAll(){
        return axios.get(this.baseUrl+"/AllUser").then(res => res.data);
    }

}

export class AuthController{
    baseUrl = "http://localhost:8080/User/loginUser?user_login=";
    async logIN(login,password){
        return await axios.get(this.baseUrl+login+"&user_password="+password)
            .then(res =>res.data);
    }
}
