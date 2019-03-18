import React from 'react'
import ScoreLabel from '../scoreLabel';

export default function GameItem({ gamesInfo, displayClass }) {
    const homeTeam = gamesInfo.teams[0]
    const awayTeam = gamesInfo.teams[1]
    return (
      <div className={"game-item-team-score align-3-items-row " + displayClass}>
          <div className="home-section">
              <img src={homeTeam.logo_url} alt={homeTeam.short_name + "logo"} />
              <label>{homeTeam.short_name.substring(0, 3)}</label>
          </div>
          <ScoreLabel data={gamesInfo} />
          <div className="away-section">
              <label>{awayTeam.short_name.substring(0, 3)}</label>
              <img src={awayTeam.logo_url} alt={awayTeam.short_name + "logo"} />
          </div>
      </div>
    )
}
