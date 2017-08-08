import React from "react";

import Calendar from "./calendar_hitc.js";


class AuraMain extends React.Component {
    render() {
        console.log(this.props.price)
        return (
            <div>
                
                    <div className="container-fluid">
                     <div className="">
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
                                    <p>{this.props.input.bio}</p>
                                </div>
                            </div>
                            <div className="columns is-mobile is-centered prices-bar">
                                <div className="column">
                                    <div className="main-text-3" id="prices">
                                        <h1>Prices</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="columns bk-third-image">
                                <div className="column is-3 is-offset-2 prices-box">
                                    <h4>{this.props.service.title} </h4>
                                    <h4>{this.props.service.price} </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
        )
    }
}

export default AuraMain;