import { axiosInstance } from './axiosConfig'

const uri = 'play_type';

export const getPlayTypes = () => {
    return axiosInstance.get(uri);
}