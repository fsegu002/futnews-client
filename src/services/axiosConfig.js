import axios from 'axios'
import { loadState } from '../store/localStorage'
import { store } from '../store/store'

const baseUrl = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_V1

const baseAxiosBody = {
    baseURL: baseUrl,
    crossdomain: true,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const http = axios.create(baseAxiosBody)

http.interceptors.request.use(
    config => {
        if(!config.headers.Authorization){
            let authToken = store.getState().user.token
            if(authToken){
                console.log('authToken', authToken)
                config.headers = { Authorization: authToken };
            }
        }
        return config;
    }, error => {
        console.error('errorrrrrrr', error)
        Promise.reject(error)
    }
);