import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

const MatchPlay = ({ playInfo, matchTeams, like }) => {
    const homeTeamId = matchTeams[0].id
    const awayTeamId = matchTeams[1].id
    const teams = {}
    teams[homeTeamId] = matchTeams[0]
    teams[awayTeamId] = matchTeams[1]

    const {id, minute, play_type_name, player_name, player_number, team_id, user_likes_post} = playInfo
    const likePost = () => {
        like(id)
    }
    
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
                            <div className="play-controls">
                                <div className="like-control control" onClick={likePost}>
                                    <Icon icon={(user_likes_post) ? "filled-heart" : "heart"} 
                                            fill={(user_likes_post) ? "red" : "var(--grey-light)"} 
                                            width="20" height="20" />
                                </div>
                                <div className="comment-control control">
                                    <Icon icon="comment" fill="var(--grey-light)" width="20" height="20" />
                                </div>
                                <div className="share-control control">
                                    <Icon icon="share" fill="var(--grey-light)" width="20" height="20" />
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