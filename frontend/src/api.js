import axios from 'axios';

// This is the URL where your Django server usually runs
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', 
});

export default API;