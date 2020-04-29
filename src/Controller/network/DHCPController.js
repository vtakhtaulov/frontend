import axios from 'axios';

export class DHCPController{
    baseUrl = "http://localhost:8080/DHCP/";
    getAll(){
       return axios.get(this.baseUrl+"/DHCPAll").then(res => res.data);
    }
    
}