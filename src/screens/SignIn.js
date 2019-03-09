import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { signin } from '../services/sigin.services'
import { authUser } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class SignInPage extends Component {
  state = {
    redirectHome: false,
    invalidForm: false,
    invalidFormClass: null,
    submitClicked: false
  }  

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    let formValues = this.formApi.getState().values
    this.setState({submitClicked: true})

    signin(formValues)
      .then(({data}) => {
        return this.props.authUser(data)
      })
      .then(() => {
        this.setState({ redirectHome: true })
        // window.location.reload()
      })
      .catch(err => {
        console.error(err)
        this.setState({ 
          invalidForm: true,
          invalidFormClass: 'is-invalid',
          submitClicked: false
        })
      })
  }

  setFormApi = this.setFormApi.bind(this)
  setFormApi(formApi) {
    this.formApi = formApi
  }

  render() {
    return (
      <div className="container">
        { (this.state.redirectHome) ? <Redirect to="/home" /> : false }
        <div className="credentials-form">
          <div className="form-container">
            <h3>Sign in</h3>

            <Form getApi={this.setFormApi} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="signInEmail">Email address</label>
                <Text field="email" 
                      type="email"
                      className={'form-control ' + this.state.invalidFormClass}
                      id="signInEmail"
                      placeholder="Type your email"/>
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <Text field="password" 
                      type="password"
                      className={'form-control ' + this.state.invalidFormClass}
                      id="signInPassword"
                      placeholder="Type your password"/>
                <div className="invalid-feedback">
                  Wrong email or password
                </div>
              </div>
              <button 
                disabled={this.state.submitClicked}
                type="submit"
                className={"btn btn-primary " + ((this.state.submitClicked)?'disabled':'')} >Submit</button>
            </Form>  
          </div>
        </div>
      </div>
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
    authUser
  }, dispatch)
}

const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage)
export default SignIn 