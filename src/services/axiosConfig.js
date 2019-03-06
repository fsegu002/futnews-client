import axios from 'axios'
import { loadState } from '../store/localStorage'

const baseUrl = process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_API_V1

const state = loadState('persist:root')
const parseUser = (userString) => {
    return JSON.parse(userString)
}
const token = () => {
    try{
        return parseUser(state.user).token
    } catch(e) {
        console.warn('Did not find property token', e)
    }
}


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    crossdomain: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token()
    }
})
axiosInstance.interceptors.request.use(
    config => {
        config.headers = { Authorization: token() };
        return config;
    }, error => Promise.reject(error)
);