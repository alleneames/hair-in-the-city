import React from "react";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent custom-nav ">
                    <div className="navbar-brand">
                        <div className="navbar-item nav-image"  href="http://google.com">
                            <img src="images/aura.png" alt="Aura Hair Studio" />
                        </div>

                        <div className="navbar-burger burger" data-target="navMenuTest">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navMenuTest" className="navbar-menu custom-links">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <a className="navbar-item" href="www.google.com">
                                    Book Now
                                </a>
                                <a className="navbar-item" href="www.facebook.com">
                                    Prices
                                </a>
                                <a className="navbar-item" href="www.twitter.com">
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