import React from 'react'
import PropTypes from 'prop-types'

const MatchPlay = ({ playInfo, matchTeams }) => {
    const homeTeamId = matchTeams[0].id
    const awayTeamId = matchTeams[1].id
    const teams = {}
    teams[homeTeamId] = matchTeams[0]
    teams[awayTeamId] = matchTeams[1]
    
    const {minute, play_type_name, player_name, player_number, team_id} = playInfo
    return (
        <li className="play-item ">
            <div className="play-details">
                <div className="play">
                    <div className="symbol">
                        <span className="symbol-mark"></span>
                    </div>

                    <div className={"desc-wrapper " + teams[team_id].team_type}>
                        <div className="description">
                            <div className="play-info">
                                <div className="play-minute"><span>{minute}'</span></div>
                                <div className="play-type">
                                    <span>{play_type_name}</span>
                                </div> 
                            </div>
                            <div className="player-info">
                                <div className="player-name">
                                    <span>{player_name}</span>
                                </div>
                                <div className="player-number">
                                    <span>#{player_number}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="v-line"></span>
        </li>
    )
}

MatchPlay.propTypes = {
    playInfo: PropTypes.shape({
        minute: PropTypes.number.isRequired,
        play_type_name: PropTypes.string.isRequired,
        player_name: PropTypes.string.isRequired,
        player_number: PropTypes.number.isRequired
    })
}

export default MatchPlay;