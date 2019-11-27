import axios from 'axios';

const Service = {
     get:(endPath)=>{
        return axios.get('https://jsonplaceholder.typicode.com/users');
     },
     post:(endPath,data)=>{
       return axios.post('https://jsonplaceholder.typicode.com/users')
     }
}

export default Service;