import axios from 'axios';

export class NetworkPoolController{
    baseUrl = "http://localhost:8080/Pool/";
    getAll(){
       return axios.get(this.baseUrl+"PoolAll").then(res => res.data);
    }
}