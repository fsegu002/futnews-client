import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { axiosInstance } from '../services/axiosConfig';
import { authUser } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignInPage extends Component {
  state = {
    redirectHome: false,
    invalidForm: false,
    invalidFormClass: null
  }  

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    let formValues = this.formApi.getState().values

    axiosInstance.post('/authenticate', formValues)
      .then(({data}) => {
        this.props.authUser(data)
        this.props.history.push("/home");
      })
      .catch(err => {
        console.error(err)
        this.setState({ 
          invalidForm: true,
          invalidFormClass: 'is-invalid'
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
        <div id="sign-in">
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
              <button type="submit"
                      className="btn btn-primary" >Submit</button>
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