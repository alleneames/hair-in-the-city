import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/";

import AdminForm from '../components/admin_form.js';

class AdminFormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            price: 0
        }
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    handleUpdateValue(data) {
        this.props.addData(data);
        this.setState({
            title: "",
            price: ""
        })
    }
    render() {
        return (
            <div>
                <AdminForm 
                    input={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleUpdateValue} />
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

export default connect(mapStateToProps, mapDispatchersToProps)(AdminFormContainer)