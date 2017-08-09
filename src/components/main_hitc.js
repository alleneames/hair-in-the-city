import React from "react";

import Calendar from "./calendar_hitc.js";


class AuraMain extends React.Component {
    render() {
        if(this.props.index === 0) {
       return (
                <div className="column is-one-third prices"> 
                    <h4 className="title">{this.props.service.title} </h4>
                    <h2 className="price">${this.props.service.price} </h2>
                </div>    
        )
        } else {
                   return (
                <div className="column is-one-third prices"> 
                    <h4 className="title">{this.props.service.title} </h4>
                    <h2 className="price">${this.props.service.price}</h2>
                </div>    
        )
        }
 
    }
}

export default AuraMain;