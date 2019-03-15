import React from 'react'

export default function Alert() {
  return (
    <div className="alert-container">
        <div className="alert futnews-alert-success" role="alert"> 
            <h4 class="alert-heading">Welcome!</h4>
            <p>Please check your email to confirm your account. Enjoy Futnews!</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
  )
}
