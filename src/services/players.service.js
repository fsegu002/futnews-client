import { http } from './axiosConfig'

const uri = 'players';

export const getTeamPlayers = (teamId) => {
    return http.get(`${uri}/${teamId}`)
}