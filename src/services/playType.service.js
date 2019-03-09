import { http } from './axiosConfig'

const uri = 'play_type';

export const getPlayTypes = () => {
    return http.get(uri);
}