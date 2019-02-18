import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { loadState } from '../store/localStorage'


const state = loadState('persist:root')
const parseUser = (userString) => {
    return JSON.parse(userString)
}
const token = () => {
    try{
        return (parseUser(state.user).token !== null)
    } catch(e) {
        console.warn('Did not find property token', e)
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            token() ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }}
            />
            )
        }
    />
);
  