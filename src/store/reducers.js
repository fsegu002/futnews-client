import { combineReducers } from 'redux' 

const initialState = {
    user: null,
    token: null
}

const user = (state = initialState, {type, payload}) => {
    switch(type){
        case 'LOGIN_USER':
            state = {
                ...state,
                user: payload.user,
                token: payload.token
            }
            return state
        case 'LOGOUT_USER':
            return state = initialState
        default:
            return state
    }
}

export default combineReducers({
    user
})