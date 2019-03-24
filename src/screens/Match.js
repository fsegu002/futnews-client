import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import GameItem from '../components/gameItem';
import MatchHeader from '../components/matchHeader';
import MatchPlay from '../components/matchPlay';
import { getMatch } from '../services/matches.service';
import { BallIndicator, MomentumIndicator, CommentsIndicator } from '../components/infoIndicators'
import { postLike } from '../services/like.service';

class Match extends Component {
    state = {
        match: null,
        posts: null,
        redirectToSignIn: false
    }

    componentDidMount() {
        const { matchId } = this.props.match.params
        getMatch(matchId)
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

    likePost = this.likePost.bind(this)
    likePost(id) {
        postLike(id)
            .then(({data}) => {
                const { post } = data;
                const updatedPosts = this.state.posts.map(el => {
                    if(el.id === post.id){
                        el.number_of_likes = post.number_of_likes
                        el.user_likes_post = post.user_likes_post
                        return el;
                    }
                    return el
                })
                this.setState({posts: updatedPosts})
            })
            .catch(e => console.log(e))
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
                <MatchPlay playInfo={el} 
                        matchTeams={this.state.match.teams} 
                        key={i} 
                        like={this.likePost}/>
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
                        <div className="game-item-icons align-3-items-row" style={style}>
                            <BallIndicator numberOfPlays={this.state.match.post_count} />
                            <MomentumIndicator />
                            <CommentsIndicator />
                        </div>
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

const style = {
    borderTop: '1px solid var(--grey-lighter)',
    borderBottom: '1px solid var(--grey-lighter)'
}

const mapStateToProps = ({user}) => ({ user })

Match = connect(
  mapStateToProps
)(Match)
export default Match 