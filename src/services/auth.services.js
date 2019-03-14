import { http } from './http'

const signInUri = '/authenticate';
const usersUri = '/users/';

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
    return http.post(usersUri + 'create', formData)
}

/**
 * Activate user method
 * @param {String} userId 
 */
export const activate = (userId) => {
    return http.post(usersUri + userId + '/confirm_user')
}