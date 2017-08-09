import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

import AuraMain from "../components/main_hitc.js";


class AuraContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.service,
            bio: "Many people who meet Trent Van de Kamp for the first time notice his vibrant energy and engaging nature. He realized early in his career he possessed a passionate desire to help people feel beautiful on the outside and within. Working with Trent, you will notice his caring approach and attention to your concerns. He believes confidence and positive self-esteem are nurtured through a constructive interaction between stylist and client. He is capable of providing a personal and professional experience for all salon services, including haircuts for women and men, color application, and waxing."
        }
        autoBind(this);
    }
    render() {
        return (
            <AuraMain
                index={this.props.index}
                service={this.props.service}
                input={this.state}
                handleChange={this.props.handleChange}
                handleUpdate={this.props.changeData} />
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(AuraContainer);