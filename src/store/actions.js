const authUser = user => ({
    type: 'LOGIN_USER',
    payload: user,
})

const logOutUser = () => ({
    type: 'LOGOUT_USER',
    payload: {}
})

const saveMatches = matches => ({
    type: 'SAVE_MATCHES_TO_STATE',
    payload: matches
})

export { 
    authUser,
    logOutUser,
    saveMatches
}