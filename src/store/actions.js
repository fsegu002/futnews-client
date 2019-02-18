const authUser = user => ({
    type: 'LOGIN_USER',
    payload: user,
})

const logOutUser = () => ({
    type: 'LOGOUT_USER',
    payload: {}
})

export { 
    authUser,
    logOutUser
}