import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://mustafademir.tk/api',
})

httpService.interceptors.request.use((config) => {
    const token = null; //storedan alacağız
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        // error handling
    }
)

export default httpService;
