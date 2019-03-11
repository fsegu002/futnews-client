import { http } from './http'

const uri = 'play_type';

export const getPlayTypes = () => {
    return http.get(uri);
}