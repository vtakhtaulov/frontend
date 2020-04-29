import axios from 'axios';

export class CrossesController{
    baseUrl = "http://localhost:8080/Crosses";
    getAll(){
       return axios.get(this.baseUrl+"/CrossesAll").then(res => res.data);
    }
}