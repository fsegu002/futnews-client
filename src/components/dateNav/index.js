import React, { Component } from 'react';
import moment from 'moment';

class DateNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            today: null,
            date: null
        }
    }
    componentDidMount(){
        const today = moment()._d
        const now = moment(this.props.selectedDate)._d
        this.setState({
            today: today,
            date: now
        }, () => {
            this.requestDate()
        })

    }
    prevDay = this.prevDay.bind(this)
    prevDay() {
        this.setState({date: moment(this.state.date).subtract(1, 'days')._d}, () => this.requestDate())
    }
    nextDay = this.nextDay.bind(this)
    nextDay() {
        this.setState({date: moment(this.state.date).add(1, 'days')._d}, () => this.requestDate())
    }

    requestDate = this.requestDate.bind(this)
    requestDate() {
        this.props.dateRequest(this.state.date)
    }
    render() {
        const displayDate = moment(this.state.date).format('MMM D');        
        return (
            <nav id="dateNav">
                <div className="dateControl">
                    <i className="fa fa-angle-left" onClick={this.prevDay} aria-hidden="true"></i>
                </div>
                <div>{ (moment(this.state.today).format("LL") === moment(this.state.date).format("LL") ) ? 
                        'Today' : 
                        displayDate }</div>
                <div className="dateControl">
                    <i className="fa fa-angle-right" onClick={this.nextDay} aria-hidden="true"></i>
                </div>
            </nav>
        );
    }
}

export default DateNav;