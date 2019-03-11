import { http } from './http'

const uri = '/authenticate';

export const signin = (formData) => {
    return http.post(uri, formData);
}