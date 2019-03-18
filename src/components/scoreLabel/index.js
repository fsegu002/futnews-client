import React from 'react'
import moment from 'moment'
import Label from '../label';

export default function ScoreLabel({data}) {
    const homeTeam = data.teams[0]
    const awayTeam = data.teams[1]
    return (
        <div className="score-info">
            { (data.info.status === 'LIVE' || data.info.status === 'IN_PLAY' || data.info.status === 'FINISHED') ? 
                <div className="score">
                    <div>{homeTeam.score}</div>
                    <div className="ml-2 mr-2">-</div>
                    <div>{awayTeam.score}</div>
                </div> :
                <div className="game-status">
                    <div className="date-label">
                        {moment(data.utc_date).format('h:mm')}
                    </div>
                    <div className="status-label">
                        <Label title={data.info.status} />
                    </div>
                </div>
            }
        </div>
    )
}

// Status = [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]