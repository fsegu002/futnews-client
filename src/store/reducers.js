import { combineReducers } from 'redux' 

const initialUserState = {
    isUserAuthenticated: false,
    user: null,
    token: null
}

const user = (state = initialUserState, {type, payload}) => {
    switch(type){
        case 'LOGIN_USER':
            state = {
                ...state,
                isUserAuthenticated: true,
                user: payload.user,
                token: payload.token
            }
            return state
        case 'LOGOUT_USER':
            return state = initialUserState
        default:
            return state
    }
}

const initialMatchState = {
    matches: []
}

const matches = (state = initialMatchState, {type, payload}) => {
    const matchesArr = payload
    switch(type) {
        case 'SAVE_MATCHES_TO_STATE':
            state = {
                ...state,
                matches: matchesArr
            }
            return state
        default: 
            return state
    }
}

export default combineReducers({
    user,
    matches
})