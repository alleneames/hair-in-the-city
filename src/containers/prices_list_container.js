import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';

import PricesList from '../components/prices_list.js';

class PricesListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return(
            <div>
                <PricesList
                    prices={this.props.prices}
                    handleRemove={this.props.deleteData}
                     />
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