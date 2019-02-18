import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function MatchHeader({children, goBackHandler, matchDate, matchId}) {
    const clickGoBack = () => {
        goBackHandler()
    }
    return (
        <div className="matchHeader">
            <div className="container">
                <div className="row align-items-center no-gutters">
                    <div className="col d-flex justify-content-start">
                        <div>
                            <i onClick={clickGoBack} className="fas fa-arrow-left"></i>
                        </div>
                    </div>
                    <div className="col-8 d-flex justify-content-center">
                        { moment(matchDate).format("MMM DD @ h:mm") }
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div>
                            <Link to={`/match/${matchId}/newMatch`}>
                                <i className="fas fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}
