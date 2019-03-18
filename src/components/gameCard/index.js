import React from 'react'
import { Link } from 'react-router-dom'
import GameItem from '../gameItem'
import { BallIndicator, MomentumIndicator, CommentsIndicator } from '../infoIndicators'

export default function GameCard({ match }) {
  return (
    <li className="list-group-item fn-shadow-light">
        <Link to={`/match/${match.id}`} >
            <GameItem gamesInfo={match} displayClass="small"/>
            
            <div className="game-item-icons align-3-items-row">
                <BallIndicator numberOfPlays={match.post_count} />
                <MomentumIndicator />
                <CommentsIndicator />
            </div>
        </Link>
    </li>
  )
}
