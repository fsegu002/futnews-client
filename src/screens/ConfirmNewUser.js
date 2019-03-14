import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { activate } from '../services/auth.services'
import Loader from 'react-loader-spinner'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { activateUser } from '../store/actions'


class ConfirmNewUserPage extends Component {
    state = {
        loading: true,
        redirectToHome: false
    }
    componentDidMount = () => {
        if(this.props.user.isUserActive){
            this.setState({redirectToHome: true})
        } else {
            const { userId } = this.props.match.params
            this.activateUser(userId)
        }
    }

    activateUser = this.activateUser.bind(this)
    activateUser(id) {
        activate(id)
            .then(response => {
                console.log(response)
                this.setState({loading: false})
                this.props.activateUser()
            })
            .catch(err => console.error(err))
    }
    
    render() {
        return (
            <div className="container">     
                {(this.state.redirectToHome) ? <Redirect to="/" /> : false }           
                <div className="row">
                    <div className="col-sm-12">
                        <div className="confirmation-message">
                            <h2>Welcome to Futnews!</h2>
                            <p>Start using the app now</p>
                            { (this.state.loading) ?
                                <Loader type="Grid" 
                                        color="var(--grey-light)"
                                        height="50"
                                        width="50" />
                                : 
                                <Link className="btn btn-secondary" to="/">Start now</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = ({user}) => {
    return {
      user
    }
}
  
const mapDispatchToProps = dispatch => {
return bindActionCreators({
    activateUser
}, dispatch)
}

const ConfirmNewUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmNewUserPage)
export default ConfirmNewUser 