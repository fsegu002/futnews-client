import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ConfirmNewUser extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="confirmation-message">
                    <h2>Welcome to Futnews!</h2>
                    <p>Start using the app now</p>
                    <Link className="btn btn-secondary" to="/">Start now</Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
