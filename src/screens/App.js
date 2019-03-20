import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Match from './Match';
import NewPostForm from '../components/NewPostForm/NewPostForm';
import SignIn from './SignIn';
import { connect } from 'react-redux'
import MainNav from '../components/mainNav';
import { PrivateRoute } from '../helpers/PrivateRoute';
import ComponentList from './ComponentList';
import SignUp from './SignUp';
import ConfirmNewUser from './ConfirmNewUser';
// import Alert from '../components/alert';


class App extends Component {   
    render() {
        return (
            <div>
                {/* <Alert /> */}
                <MainNav />
                <div style={{'paddingTop': '56px'}}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/match/:matchId" component={Match} />
                        <PrivateRoute exact path="/match/:matchId/newMatch" component={NewPostForm} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/confirm-new-user/:userId" component={ConfirmNewUser} />

                        {/* ONLY DISPLAY 'components list' ON DEVELOPMENT  */}
                        { (process.env.NODE_ENV === 'development') ? <Route path="/component-list" component={ComponentList} /> : false }
                    </Switch>
                </div>
                {/* <div className="app-background"></div> */}
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