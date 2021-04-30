import axios from 'axios';


export const API = axios.create({
    baseURL : 'https://tattoo-api.devops.ifrn.edu.br/api',
});