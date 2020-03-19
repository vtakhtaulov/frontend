import axios from 'axios';

export class UserService{
    baseUrl = "http://localhost:8080/User/";
    getAll(){
       return axios.get(this.baseUrl+"/AllUser").then(res => res.data);
    }
}