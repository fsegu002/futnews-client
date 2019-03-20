import React from 'react'
import Icon from '../icon'
import './indicators.scss'

const color = 'var(--grey-dark)'

export function BallIndicator({numberOfPlays}) {
    return (
        <div title="Plays recorded" className="icon-svg">
            <Icon   icon="goal" 
                    fill={color}
                    width="18px"
                    height="18px"/>
            <span className="ml-2">{(numberOfPlays) ? numberOfPlays : '0'}</span>
        </div>
    )
}

export function MomentumIndicator({momentumLevel}) {
    return (
        <div title="Momentum" className="icon-svg">
            <Icon icon="thermometer" 
                    fill={color}
                    width="18px"
                    height="18px"/>
            <span className="ml-2">{(momentumLevel) ? momentumLevel : '0'}</span>
        </div>
    )
}

export function CommentsIndicator({numberOfComments}) {
    return (
        <div title="Comments" className="icon-svg">
            <Icon icon="comment" 
                    fill={color}
                    width="18px"
                    height="18px"/>
            <span className="ml-2">{(numberOfComments) ? numberOfComments : '0'}</span>
        </div>
    )
}