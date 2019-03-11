import { http } from './http'

const uri = 'posts';

export const savePost = (formValues) => {
    return http.post(uri, formValues)
}