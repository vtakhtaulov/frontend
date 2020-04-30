import axios from 'axios';

export class Network_pool_controller{
    baseUrl = "http://localhost:8080/Pool/";
    getAll(){
       return axios.get(this.baseUrl+"PoolAll").then(res => res.data);
    }
}