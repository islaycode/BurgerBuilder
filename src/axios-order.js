 import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-d873f.firebaseio.com/'
 });

 export default instance;