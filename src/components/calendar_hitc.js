import React from 'react';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
import { getEvents } from '../actions/index.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        getEvents((events)=> {
            this.setState({events})
        })
    }
    render() {
        return (
            <div>
                <BigCalendar
                    style={{height: '450px', width: '100%'}}
                    events={this.state.events} />
                
            </div>
        )
    }
}

export default Calendar;