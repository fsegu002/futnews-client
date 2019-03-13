import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { signUp } from '../services/auth.services'
// import { authUser } from '../store/actions'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export default class SignUp extends Component {
  state = {
    redirectHome: false,
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
    this.setState({formFields: {email, password, password_confirmation}}, () => console.log(this.state.formFields))
    this.validateForm()
  }

  // TODO: fix validation
  validateForm = this.validateForm.bind(this)
  validateForm() {
    const {email, password, password_confirmation} = this.state.formFields
    this.setState({invalidForm: false})    
    if( email){
      this.setState({disableSubmit: false})
    } else {
      console.error('Passwords don\' match.')
      this.setState({disableSubmit: true})
    }
  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    signUp(this.state.formFields)
      .then(response => {
        console.log('response', response)
        this.setState({ disableSubmit: false })
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
                      id="signUpEmail"
                      placeholder="Type your email"/>
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


// const mapStateToProps = (state) => {
//   return {
//     ...state
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     authUser
//   }, dispatch)
// }

// const SignIn = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignUpPage)
// export default SignIn 