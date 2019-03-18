import React from 'react'
import Icon from '../icon'

const color = 'var(--grey-dark)'

export function BallIndicator({numberOfPlays}) {
    return (
        <div title="Plays recorded">
            <Icon icon="goal" fill={color}/>
            <span className="ml-2">{numberOfPlays}</span>
        </div>
    )
}

export function MomentumIndicator({momentumLevel}) {
    return (
        <div title="Momentum">
            <Icon icon="flame" fill={color}/>
            <span className="ml-2">0</span>
        </div>
    )
}

export function CommentsIndicator({numberOfComments}) {
    return (
        <div title="Comments">
            <Icon icon="comment" fill={color}/>
            <span className="ml-2">0</span>
        </div>
    )
}
