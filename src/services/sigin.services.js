import { http } from './axiosConfig'

const uri = '/authenticate';

export const signin = (formData) => {
    return http.post(uri, formData);
}