import { http } from './http'

const uri = 'players';

export const getTeamPlayers = (teamId) => {
    return http.get(`${uri}/${teamId}`)
}