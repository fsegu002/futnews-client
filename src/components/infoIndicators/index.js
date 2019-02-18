import React from 'react'

export function BallIndicator({numberOfPlays}) {
  return (
    <div title="Plays recorded">
        <i className="fas fa-futbol"></i>
        <span>{numberOfPlays}</span>
    </div>
  )
}

export function MomentumIndicator({momentumLevel}) {
    return (
        <div title="Momentum">
            <i className="fas fa-fire"></i>
            <span>+8</span>
        </div>
    )
}

export function CommentsIndicator({numberOfComments}) {
    return (
        <div title="Comments">
            <i className="far fa-comment-alt"></i>
            <span>332</span>
        </div>
    )
}
