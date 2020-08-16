import axios from 'axios';
import Vue from 'vue';
import store from '../store'

const errorHandler = (error) => {
    const { errors } = error.response.data;
    const errorKeys = Object.keys(errors);
    errorKeys.forEach((key) => {
        const keyArr =  errors[key];
        keyArr.map(e => {
            Vue.toasted.error(e, { duration: 2500 });
        })
    })
}

const httpService = axios.create({
    baseURL: 'http://mustafademir.tk/api',
})

httpService.interceptors.request.use((config) => {
    const token = store.getters["auth/getAccessToken"] || localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        errorHandler(error);
    }
)

export default httpService;
