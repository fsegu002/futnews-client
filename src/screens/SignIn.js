import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { signIn } from '../services/auth.services'
import { authUser } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'


class SignInPage extends Component {
  state = {
    redirectHome: false,
    invalidForm: false,
    invalidFormClass: null,
    submitClicked: false,
    disableSubmit: true
  }  

  validateForm = this.validateForm.bind(this)
  validateForm() {
    const {password} = this.formApi.getState().values
    this.setState({invalidForm: false}) 
    if(password.length > 7){
      this.setState({disableSubmit: false}, () => console.log('pass', password))
    } else {
      this.setState({disableSubmit: true}, () => console.log('no pass', password))
    }
  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    let formValues = this.formApi.getState().values
    this.setState({submitClicked: true})

    signIn(formValues)
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
        { (this.state.redirectHome) ? <Redirect to="/" /> : false }
        <div className="credentials-form">
          <div className="form-container">
          <header className="d-flex">
              <h3>Sign In</h3> <span>or <Link className="btn btn-link" to="/signup" >Sign Up</Link></span>
            </header>            

            <Form getApi={this.setFormApi} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="signInEmail">Email address</label>
                <Text field="email" 
                      type="email"
                      className={'form-control ' + this.state.invalidFormClass}
                      id="signInEmail"
                      required
                      placeholder="Type your email"/>
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <Text field="password" 
                      type="password"
                      onChange={this.validateForm}
                      className={'form-control ' + this.state.invalidFormClass}
                      id="signInPassword"
                      placeholder="Type your password"/>
                <div className="invalid-feedback">
                  Wrong email or password
                </div>
              </div>
              <button 
                disabled={this.state.submitClicked || this.state.disableSubmit}
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