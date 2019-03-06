import { axiosInstance } from './axiosConfig'

const uri = 'posts';

export const savePost = (formValues) => {
    return axiosInstance.post(uri, formValues)
}