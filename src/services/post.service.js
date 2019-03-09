import { http } from './axiosConfig'

const uri = 'posts';

export const savePost = (formValues) => {
    return http.post(uri, formValues)
}