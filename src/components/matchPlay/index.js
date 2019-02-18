import React from 'react'

export default function MatchPlay({ playInfo }) {
    const {minute,  player_name} = playInfo
    // const {id, minute, play_type_code, player_name, player_number} = playInfo
    return (
        <li className="play-item">
            <div className="play-details">
                <div className="play">
                    <div className="symbol">
                        <span>{minute}'</span>
                    </div>
                    <div className="description">
                        {/* <span className="player-number">{ player_number }</span> */}
                        <span className="player">{ player_name }</span>
                    </div>                
                </div>
            </div>
            <span className="v-line"></span>
        </li>
    )
}
