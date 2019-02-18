import React, { Component } from 'react'
import { axiosTokenInstance } from '../../services/axiosConfig';

export default class NewPostForm extends Component {
    state = {
        post: {minute: 0},
        match: null,
        teams: [],
        players: [],
        playerOptions: '',
        playTypes: null
    }

    componentDidMount() {
        const {matchId} = this.props.match.params
        axiosTokenInstance.get('/matches/'+ this.props.match.params.matchId)
            .then(({data}) => {
                const post = Object.assign({}, this.state.post)
                post.match_id = parseInt(matchId)
                this.setState({
                    post, 
                    match: data
                })
                return data
            })
            .then(({match}) => {
                const teamsArr = match.teams.map(el => {
                    return Object.assign({selected: ''}, el)
                })
                this.setState({teams: teamsArr})
                return axiosTokenInstance.get('/play_type')
            })
            .then(({data}) => {
                const playTypes = data.map(el => {
                    el.selected = ''
                    return el
                })
                this.setState({playTypes: playTypes})
            })
            .catch(err => console.error(err))
    }    

    selectTeam = this.selectTeam.bind(this)
    selectTeam(index) {
        const teams = Object.assign([], this.state.teams)
        teams.forEach((el, i) => el.selected = (index === i) ? 'control-selected' : '' )
        this.setState({teams})
        const post = Object.assign({}, this.state.post)
        const teamId = this.state.teams[index].id
        post.team_id = teamId
        this.setState({post}, () => this.getPlayers(teamId))
    }

    getPlayers = this.getPlayers.bind(this)
    getPlayers(teamId) {
        axiosTokenInstance.get('/players/' + teamId)
            .then(({data}) => {
                this.setState({players: data})
            })
    }

    selectPlayer = this.selectPlayer.bind(this)
    selectPlayer(e) {
        let playerId = e.target.value
        const post = Object.assign({}, this.state.post)
        post.player_id = parseInt(playerId)
        this.setState({post})
    }

    addMinutes = this.addMinutes.bind(this)
    addMinutes() {
        const post = Object.assign({}, this.state.post)
        post.minute = (!post.minute) ? 1 : post.minute + 1
        this.setState({post})
    }

    subtractMinutes = this.subtractMinutes.bind(this)
    subtractMinutes() {
        const post = Object.assign({}, this.state.post)
        post.minute = (!post.minute) ? 0 : (post.minute === 0) ? 0 : post.minute - 1
        this.setState({post})
    }

    buildPlaytypes = this.buildPlaytypes.bind(this)
    buildPlaytypes() {
        if(this.state.playTypes){
            return this.state.playTypes.map((el, index) => (
                <div className={"control " + el.selected} 
                     key={index}
                     onClick={() => this.selectPlayType(index)}>
                    <div>
                    <i className="fas fa-times"></i>
                        <label>{el.name}</label>
                    </div>
                </div>
            ))
        }
    }

    selectPlayType = this.selectPlayType.bind(this)
    selectPlayType(index) {
        const playTypes = this.state.playTypes.map((el, i) => {
            el.selected = (i === index) ? 'control-selected' : ''
            return el
        })
        const post = Object.assign({}, this.state.post)
        post.play_type_id = playTypes[index].id
        this.setState({playTypes, post}, () => {
            this.buildPlaytypes()
        })
    }

    submitForm = this.submitForm.bind(this)
    submitForm() {
        const desc = document.getElementById('description').value
        const post = Object.assign({}, this.state.post)
        post.description = desc
        
        axiosTokenInstance.post('/posts', post)
            .then(response => {
                this.goBack()
            })
            .catch(err => console.error(err))
    }
    
    

    goBack = this.goBack.bind(this)
    goBack() {
        this.props.history.goBack();
    }
    render() {
        if(!this.state.teams) return false 
        let teamsArr = this.state.teams.map((el, index) => 
            (<div key={el.id} className={el.team_type + ' ' + el.selected} onClick={() => this.selectTeam(index)} >
                <div>
                    <img src={el.logo_url} alt={el.short_name + "_logo"} />
                    <label>{el.short_name}</label>
                </div>
            </div>) 
        )

        let playTypesArr;
        if(this.state.playTypes) {
            playTypesArr = this.buildPlaytypes()
        }
        
        let players = ''
        if(this.state.players.data){
            let arr = this.state.players.data
            players = arr.map(el => (<option key={el.id} value={el.id}>{el.shirt_number + " - " + el.name}</option>))
        }

        return (
            (!this.state.match) ?
            <div></div> :
            <div className="container form-container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center" style={{height: "35px", marginTop: '15px'}}>
                        <div onClick={this.goBack} >
                            Cancel
                        </div>
                    </div>
                </div>
                <form name="post-form">
                    <div className="control-row "> 
                        {/* <div className="control-label text-center">
                            <h4 >Tap team</h4>
                        </div> */}
                        <div className="team-controls labels">
                            <div><label>Home</label></div>
                            <div><label>Away</label></div>
                        </div>
                        <div className="team-controls">
                            {teamsArr}
                        </div>
                    </div>
                    <div className="control-row" > 
                        <div className="player-controls">
                            <div className="form-group" style={{margin: '0'}}>
                                <select onChange={this.selectPlayer} className="form-control">
                                    <option>Chose player</option>
                                    { players }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="control-row "> 
                        {/* <div className="control-label text-center">
                            <h4 >Type of play</h4>
                        </div> */}
                        <div className="play-controls">
                            { playTypesArr }
                        </div>
                    </div>
                    <div className="control-row "> 
                        <div className="time-controls">
                            <div className="subtract-time" onClick={this.subtractMinutes}>
                                <i className="fas fa-minus" />
                            </div>  
                            <div className="match-time">
                                <p>'{this.state.post.minute || 0}</p>
                            </div> 
                            <div className="add-time" onClick={this.addMinutes}>
                                <i className="fas fa-plus" />
                            </div> 
                        </div>
                    </div>
                    <div className="control-row" > 
                        <div className="description-controls">
                            <div className="form-group" style={{margin: '0'}}>
                                <textarea id="description" placeholder="Describe the play" style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={this.submitForm} className="btn btn-primary btn-block shadow">Post</button>
                    
                </form>
            </div>
        )
    }
}
