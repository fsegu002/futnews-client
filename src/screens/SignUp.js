import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { signUp } from '../services/auth.services'
import { authUser } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'


class SignUpPage extends Component {
  state = {
    redirectToHome: false,
    invalidForm: false,
    invalidFormClass: null,
    disableSubmit: true,
    formFields: {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  getFormValues = this.getFormValues.bind(this)
  getFormValues() {
    const {email, password, password_confirmation} = this.formApi.getState().values
    this.setState(
      {formFields: {email, password, password_confirmation}},
      () => (password && password_confirmation) ? this.validateForm() : false
    )    
  }

  validateForm = this.validateForm.bind(this)
  validateForm() {
    const {password, password_confirmation} = this.state.formFields
    this.setState({invalidForm: false}) 
    if(password.length > 7 && password === password_confirmation){
      this.setState({disableSubmit: false})
    } else {
      this.setState({disableSubmit: true})
    }
  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    this.setState({disableSubmit: true})
    signUp(this.state.formFields)
      .then(({data}) => {
        this.props.authUser(data)
        this.setState({redirectToHome: true})
      })
      .catch(err => {
        console.error('Create user error', err)
        this.setState({ 
          invalidForm: true,
          invalidFormClass: 'is-invalid',
          disableSubmit: false
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
        {(this.state.redirectToHome) ? <Redirect to="/" /> : false }  
        <div className="credentials-form">
          <div className="form-container">
            <header className="d-flex">
              <h3>Sign up</h3> <span>or <Link className="btn btn-link" to="/signin" >Sign In</Link></span>
            </header>

            <Form getApi={this.setFormApi} 
                  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="signUpEmail">Email address</label>
                <Text field="email" 
                      type="email"
                      className={'form-control ' + this.state.invalidFormClass}
                      onChange={this.getFormValues} 
                      id="signUpEmail"
                      placeholder="Type your email"
                      required
                      />
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">Password</label>
                <Text field="password" 
                      type="password"
                      className={'form-control ' + this.state.invalidFormClass}
                      onChange={this.getFormValues} 
                      id="signUpPassword"
                      placeholder="Type your new password"
                      />
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">Confirm Password</label>
                <Text field="password_confirmation" 
                      onChange={this.getFormValues} 
                      type="password"
                      className={'form-control ' + this.state.invalidFormClass}
                      id="signUpConfirmPassword"
                      placeholder="Confirm password"/>
                <div className="invalid-feedback">
                  Passwords don't match
                </div>
              </div>
              <button 
                disabled={this.state.disableSubmit}
                type="submit"
                className={"btn btn-primary " + ((this.state.disableSubmit)?'disabled':'')} >Submit</button>
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

const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
export default SignUp 