import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MainNav extends Component {
    state = {
        navItemClass: ['collapse', 'navbar-collapse']
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('state', this.props.user.isUserAuthenticated)
    }
    

    logOut = this.logOut.bind(this)
    logOut() {
        this.props.logOutUser()
    }

    collapseNav = this.collapseNav.bind(this)
    collapseNav() {
        const newArr = Object.create(this.state.navItemClass)
        newArr.concat(['hide'])
        this.setState({navItemClass: newArr})
    }

    render() {
        return (
            <nav id="mainNav" className="navbar gradient-background fn-shadow">
                <div className="container">
                    <a className="navbar-brand" href="/">FutNews</a>
                    <button className="menu navbar-toggler circled-btn fn-shadow" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
            
                    <div className={this.state.navItemClass.join(' ')} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={this.collapseNav} >Home</Link>
                            </li>

                        { this.props.user.isUserAuthenticated ? (
                            <li className="nav-item">
                                <button className="nav-link button-link" href="#" onClick={this.logOut} >Log out</button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      ...state
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      logOutUser
    }, dispatch)
}

MainNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNav)

export default MainNav