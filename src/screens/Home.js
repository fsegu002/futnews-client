import React, { Component } from 'react'
import { axiosTokenInstance } from '../services/axiosConfig'
import DateNav from '../components/dateNav';
import GameItem from '../components/gameItem';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BallIndicator, MomentumIndicator, CommentsIndicator } from '../components/infoIndicators';
import qs from 'query-string';
import { Redirect } from 'react-router-dom'
import { isUserSignedIn } from '../store/localStorage'


export default class Home extends Component {
  state = {
    matches: [],
    matchDate: null,
    redirectToSignIn: false,
    didUserSignIn: false
  }

  componentDidMount() {
    if(!this.state.didUserSignIn){
      if(isUserSignedIn){
        this.parseDate()
        this.setState({didUserSignIn: true}, () => console.log('match state', this.state))
      }
    }
  }
  
  parseDate = this.parseDate.bind(this)
  parseDate() {
    const {matchDate} = qs.parse(window.location.search)
    if(matchDate) {
      this.setState({matchDate})
    } else {
      this.setState({matchDate: moment().format("YYYY-MM-DD")})
    }
    this.requestDate(matchDate)
  }

  requestDate = this.requestDate.bind(this)
  requestDate(dateSelected) {
    const formattedDate = moment(dateSelected).format("YYYY-MM-DD")
    this.props.history.push('?matchDate=' + formattedDate)
    axiosTokenInstance.get('matches?date_selected=' + formattedDate)
      .then(({data, status}) => { 
        if(status === 401) {
            return this.setState({redirectToSignIn: true})
        }
        this.setState({ matches: data })
      })
      .catch(err => {
        console.error('There was an error: ', err)
        // HANDLE DATE ERROR
      })
  }

  buildMatches = this.buildMatches.bind(this)
  buildMatches() {
    if(!this.state.matches) return false
    const matches = this.state.matches.map(el => (
      <li className="list-group-item shadow" key={el.id}>
        <Link to={`/match/${el.id}`} >
          <GameItem gamesInfo={el} />
          
          <div className="game-item-icons align-3-items-row">
              <BallIndicator numberOfPlays={el.post_count} />
              <MomentumIndicator />
              <CommentsIndicator />
          </div>
        </Link>
      </li>
    ))
    return matches
  }

  render() {    
    const matchList = this.buildMatches()

    return (
      <div>
        { (this.state.redirectToSignIn) ? <Redirect to="/signin" /> : false }
        { (this.state.matchDate) ? <DateNav selectedDate={this.state.matchDate} dateRequest={this.requestDate}/> : false}
        <div className="container">
          <ul id="matches-list" className="list-group list-group-flush">
            { (this.state.matches.length ) ? matchList : 
              <li className="list-group-item">There are no games scheduled for this day</li>
            }
          </ul>
        </div>
      </div>
    )
  }
}
