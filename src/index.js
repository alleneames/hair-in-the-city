import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/';

import thunk from 'redux-thunk';

import Navbar from './components/navbar_hitc.js';
import PricesListContainer from './containers/prices_list_container.js';
import AdminFormContainer from './containers/admin_form_container.js';
import Calendar from './components/calendar_hitc.js';
import NavNew from './components/navbar_new.js';


import './styles.css'

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                 <Navbar />   
                    <Switch>
                        <Route exact path="/" component={PricesListContainer} />
                        <Route exact path = "/booknow" component={Calendar} />
                    </Switch>
                    </div>
                </BrowserRouter>
                
                
                
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));