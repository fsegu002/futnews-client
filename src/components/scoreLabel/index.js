import React from 'react'
import moment from 'moment'

export default function ScoreLabel({data}) {
    const homeTeam = data.teams[0]
    const awayTeam = data.teams[1]
    return (
        <div className="score-info">
            { (data.info.status === 'LIVE' || data.info.status === 'IN_PLAY' || data.info.status === 'FINISHED') ? 
                <div className="score">
                    <div>{homeTeam.score}</div><div>{awayTeam.score}</div>
                </div> :
                <div className="game-status">
                    <div className="date-label">
                        {moment(data.utc_date).format('h:mm')}
                    </div>
                    <div className="status-label">
                        {data.info.status}
                    </div>
                </div>
            }
        </div>
    )
}

// Status = [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]