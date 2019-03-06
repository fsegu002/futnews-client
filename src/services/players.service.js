import { axiosInstance } from './axiosConfig'

const uri = 'players';

export const getTeamPlayers = (teamId) => {
    return axiosInstance.get(`${uri}/${teamId}`)
}