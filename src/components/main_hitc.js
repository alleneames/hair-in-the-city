import React from "react";

import Calendar from "./calendar_hitc.js";


class AuraMain extends React.Component {
    render() {

                   return (
                <div className="col-md-4 prices"> 
                    <h4 className="title">{this.props.service.title} </h4>
                    <h2 className="price">${this.props.service.price}</h2>
                </div>    
        )
        }
 
    }


export default AuraMain;