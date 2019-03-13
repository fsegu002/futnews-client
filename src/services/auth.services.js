import { http } from './http'

const signInUri = '/authenticate';
const signUpUri = '/users/create';

/**
 * SignIn post method
 * @param {Object} formData 
 */
export const signIn = (formData) => {
    return http.post(signInUri, formData);
}


/**
 * SignUp post method
 * @param {Object} formData 
 */
export const signUp = (formData) => {
    return http.post(signUpUri, formData)
}