import React from "react";

import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent custom-nav">
                    <div className="navbar-brand">
                        <div className="navbar-item nav-image"  >
                            <Link to="/"><img src="images/aura.png" alt="Aura Hair Studio" /></Link>
                        </div>

                        <div className="navbar-burger burger is-transparent" data-target="navMenuTest">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navMenuTest" className="navbar-menu custom-links">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Link className="navbar-item" to="/booknow">Book Now</Link>
                                <a className="navbar-item" href="#prices">
                                    Prices
                                </a>
                                <a className="navbar-item" href="#bio">
                                    Bio
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;