import axios from 'axios'
import { loadState } from '../store/localStorage'

const baseUrl = 'http://localhost:3030/api/v1/'

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})
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

const axiosTokenInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token()
    }
})

export { 
    axiosInstance,
    axiosTokenInstance
}