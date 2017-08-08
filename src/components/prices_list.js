import React from "react";

import AuraContainer from '../containers/container_hitc.js';

class PricesList extends React.Component {
    genPrices() {
        return this.props.prices.map((item, index)=> {
            return <AuraContainer 
                index={index}
                key={index + item._id}
                service={item}
                handleRemove={this.props.handleRemove} />        
            })
    }
    render() {
        return(
            <div>
                {this.genPrices()}
            </div>

        )
    }
}

export default PricesList;