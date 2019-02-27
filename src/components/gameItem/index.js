import React from 'react'
import ScoreLabel from '../scoreLabel';

export default function GameItem({ gamesInfo }) {
    const homeTeam = gamesInfo.teams[0]
    const awayTeam = gamesInfo.teams[1]
  return (
    <div className="game-item-team-score align-3-items-row">
        <div className="home-section">
            <img src={homeTeam.logo_url} alt={homeTeam.short_name + "logo"} />
            <label>{homeTeam.short_name}</label>
        </div>
        <ScoreLabel data={gamesInfo} />
        <div className="away-section">
            <img src={awayTeam.logo_url} alt={awayTeam.short_name + "logo"} />
            <label>{awayTeam.short_name}</label>
        </div>
    </div>
  )
}