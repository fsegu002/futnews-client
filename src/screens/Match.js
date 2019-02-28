import React, { Component } from 'react'
import { axiosTokenInstance } from '../services/axiosConfig';
import { Redirect } from 'react-router-dom'
import GameItem from '../components/gameItem';
import MatchHeader from '../components/matchHeader';
import MatchPlay from '../components/matchPlay';

export default class Match extends Component {
    state = {
        match: null,
        posts: null,
        redirectToSignIn: false
    }

    componentDidMount() {
        const { matchId } = this.props.match.params
        axiosTokenInstance.get('/matches/'+matchId)
            .then((response) => {
                if(response.data.status === 401) {
                    return this.setState({redirectToSignIn: true})
                }
                this.setState({
                    match: response.data.match,
                    posts: response.data.posts
                })
                document.title = this.state.match.teams[0].short_name + ' vs ' + this.state.match.teams[1].short_name
            })
            .catch(e => {
                console.warn('error: ', e)
            })
    }      

    back = this.back.bind(this)
    back() {
        this.props.history.goBack();
    }
    

    render() {
        const matchInfo = (
            <div className="row align-items-center no-gutters">
                <div className="col-12">
                    <GameItem gamesInfo={this.state.match} />                    
                </div>
            </div>)

        let posts;
        if(this.state.posts){
            posts = this.state.posts.map((el, i) => (
                <MatchPlay playInfo={el} key={i} />
                )
            )
        }
        return (
            <div>
                {(this.state.redirectToSignIn) ? <Redirect to="/signin" /> : false}
                { (!this.state.match) ?
                    <div></div> : 
                    <div>
                        <MatchHeader 
                                    goBackHandler={this.back} 
                                    matchDate={this.state.match.info.utcDate} 
                                    matchId={this.state.match.id}>
                            {matchInfo}
                        </MatchHeader>
                        <div className="container">
                            <ul style={{'padding': '0'}}>
                                {posts}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
