import axios from 'axios';

const url ='https://jsonplaceholder.typicode.com';

export const getPosts = async() =>{
    try {
        const res= await axios.get(`${url}/posts`);
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
}