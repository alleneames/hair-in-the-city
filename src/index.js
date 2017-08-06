import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
import { getEvents } from './actions/index.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Navbar from './components/navbar_hitc.js';
import AuraMain from './components/main_hitc.js';
import './styles.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends React.Component {
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

ReactDOM.render(<App />, document.querySelector('#root'));