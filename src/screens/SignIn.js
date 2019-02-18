import React, { Component } from 'react'
import { Form, Text } from 'informed'
import { axiosInstance } from '../services/axiosConfig';
import { authUser } from '../store/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignInPage extends Component {
  state = {
    redirectHome: false
  }
  

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit() {
    let formValues = this.formApi.getState().values

    axiosInstance.post('/authenticate', formValues)
      .then(({data}) => {
        this.props.authUser(data)

        this.setState({redirectHome: true})
      })
      .catch(err => console.error(err))
  }

  setFormApi = this.setFormApi.bind(this)
  setFormApi(formApi) {
    this.formApi = formApi
  }

  render() {
    return (
      <div className="container">
        { (this.state.redirectHome) ? <Redirect to='/' /> : false }
        <div className="row">
          <div className="col-md-12">
            <h3>Sign in</h3>

            <Form getApi={this.setFormApi} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="signInEmail">Email address</label>
                <Text field="email" 
                      type="email"
                      className="form-control"
                      id="signInEmail"
                      placeholder="Type your email"/>
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <Text field="password" 
                      type="password"
                      className="form-control"
                      id="signInPassword"
                      placeholder="Type your password"/>
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