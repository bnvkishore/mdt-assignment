import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://green-thumb-64168.uc.r.appspot.com/'
});

instance.interceptors.request.use(request => {
    // Edit request config
    request.headers.Authorization = sessionStorage.getItem('token');
    return request;
}, error => {
    console.log('request error')
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return Promise.resolve(response);
}, error => {
    return Promise.reject(error);
});

export default instance;