import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Match from './Match';
import NewPostForm from '../components/NewPostForm/NewPostForm';
import SignIn from './SignIn';
import { connect } from 'react-redux'
import MainNav from '../components/mainNav';
import { PrivateRoute } from '../helpers/PrivateRoute';
import ComponentList from './ComponentList';


class App extends Component {
    componentDidMount = () => {
        document.title = 'Sign In'
      console.log('state', this.props)
    }
    
    render() {
        return (
            <div>
                { !this.props.user.isUserAuthenticated ? <Redirect to="/signin" /> : false } 
                <MainNav />
                <div style={{'paddingTop': '56px'}}>
                    <Switch>
                        <PrivateRoute exact path="/home" component={Home} />
                        <PrivateRoute exact path="/match/:matchId" component={Match} />
                        <PrivateRoute exact path="/match/:matchId/newMatch" component={NewPostForm} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/component-list" component={ComponentList} />
                    </Switch>
                </div>
                <div className="app-background"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}

App = connect(
    mapStateToProps,
    null
)(App)
export default App 