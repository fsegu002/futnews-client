import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isUserSignedIn } from '../../store/localStorage'
import { logOutUser } from '../../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MainNav extends Component {
    logOut = this.logOut.bind(this)
    logOut() {
        this.props.logOutUser()
    }

    render() {
        return (
            <nav id="mainNav" className="navbar shadow">
                <div className="container">
                    <a className="navbar-brand" href="/">FutNews</a>
                    <button className="menu navbar-toggler circled-btn shadow" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" >Home</Link>
                            </li>

                        { isUserSignedIn() ? (
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.logOut} >Log out</a>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      logOutUser
    }, dispatch)
}

MainNav = connect(
    null,
    mapDispatchToProps
)(MainNav)

export default MainNav