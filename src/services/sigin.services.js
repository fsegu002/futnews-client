import { axiosInstance } from './axiosConfig'

const uri = '/authenticate';

export const signin = (formData) => {
    return axiosInstance.post(uri, formData);
}