import React, { Component } from 'react'
import DateNav from '../components/dateNav';
import GameItem from '../components/gameItem';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BallIndicator, MomentumIndicator, CommentsIndicator } from '../components/infoIndicators';
import qs from 'query-string';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getAllMatches } from '../services/matches.service'
import { saveMatches } from '../store/actions'


class Home extends Component {
  state = {
    matches: [],
    matchesReady: false,
    matchDate: null,
    redirectToSignIn: false
  }

  componentDidMount() {
    document.title = 'Home'
    this.parseDate()
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
    this.addDateToUri(formattedDate)
    // add axios here
    getAllMatches(formattedDate)
    .then(({data}) => {
      console.log(data)
      if(data.error) throw Error("Error with code: ", data.status)
        this.props.saveMatches(data)
      })
      .then(() => this.setState({matches: this.props.matches.matches}))
      .catch(err => console.error(err))

  }
  
  addDateToUri =  this.addDateToUri.bind(this)
  addDateToUri(date) {
    this.props.history.push('?matchDate=' + date)
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
    const matchList = (this.state.matches) ? this.buildMatches() : false

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

const mapStateToProps = ({user, matches}) => ({ user, matches })


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveMatches
  }, dispatch)
}

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export default Home 