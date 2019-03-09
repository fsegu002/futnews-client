import { http } from './axiosConfig'

const uri = 'matches';
const dateSelected = '?date_selected='

export const getAllMatches = (date) => {
    return http.get(uri + dateSelected + date);
}

export const getMatch = (matchId) => {
    return http.get(`${uri}/${matchId}`)
}