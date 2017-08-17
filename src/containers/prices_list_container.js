import React from "react";
import autoBind from "react-autobind"

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';

import PricesList from '../components/prices_list.js';

class PricesListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            bio: "Many people who meet Trent Van de Kamp for the first time notice his vibrant energy and engaging nature. He realized early in his career he possessed a passionate desire to help people feel beautiful on the outside and within. Working with Trent, you will notice his caring approach and attention to your concerns. He believes confidence and positive self-esteem are nurtured through a constructive interaction between stylist and client. He is capable of providing a personal and professional experience for all salon services, including haircuts for women and men, color application, and waxing."
        };
        autoBind(this);
    }
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return(
            <div>
                <div>
                     <div id="main-ref">
                        <div className="columns is-mobile is-centered bk-main-image">
                            <div className="column is-half">
                                    <div className="main-text w3-animate-opacity">
                                        <h2>"Our hair is a statement of style, an affirmation of beauty, and an expression of self-love." - Adémola Mandella</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-mobile is-centered bio-bar">
                                <div className="column">
                                    <div className="main-text-2" id="bio">
                                        <h1>About Me</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="columns bk-second-image">
                                <div className="column is-one-quarter is-offset-one-quarter trent-image" style={{backgroundImage:`url('/images/trent.jpg')`, height:`200px`, width:`150px` }}></div>
                                <div className="column is-5 bio-box">
                                    <p>{this.state.bio} </p>
                                </div>
                            </div>
                            <div className="columns is-mobile is-centered prices-bar">
                                <div className="column">
                                    <div className="main-text-3" id="prices">
                                        <h1>Prices</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                                    <PricesList
                                    prices={this.props.prices}
                                    handleRemove={this.props.deleteData}
                            />
                        </div>
                    </div> 
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(PricesListContainer);