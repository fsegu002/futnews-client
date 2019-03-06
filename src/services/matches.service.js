import { axiosInstance } from './axiosConfig'

const uri = 'matches';
const dateSelected = '?date_selected='

export const getAllMatches = (date) => {
    return axiosInstance.get(uri + dateSelected + date);
}

export const getMatch = (matchId) => {
    return axiosInstance.get(`${uri}/${matchId}`)
}