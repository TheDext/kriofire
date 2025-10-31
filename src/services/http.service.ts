import axios from 'axios';

const API_ENDPOINT = 'https://kriofire.com/api/';

const http = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json', // Указываем тип содержимого
    },
});

export const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};
