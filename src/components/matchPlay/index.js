import React from 'react'
import PropTypes from 'prop-types'

const MatchPlay = ({ playInfo }) => {
    const {minute, play_type_name, player_name, player_number} = playInfo
    console.log(playInfo)
    return (
        <li className="play-item">
            <div className="play-details">
                <div className="play">
                    <div className="symbol">
                    </div>
                    <div className="desc-wrapper">
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