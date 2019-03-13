import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRouteComponent = ({ component: Component, user, ...rest }) => {
    console.log('private')
    return <Route
        {...rest}
        render={props =>
            user.isUserAuthenticated ? (
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
};

const mapStateToProps = ({user}) => {
    return {
      user
    }
}

export const PrivateRoute = connect(
    mapStateToProps,
    null
)(PrivateRouteComponent)